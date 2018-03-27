import { pubgApiWrapper as PUBGAPI } from 'pubg-api-wrapper';
import { DbService } from '../db';

export class MatchService {
    constructor(token) {
        this.db = new DbService();
        this.api = new PUBGAPI(token);
    }
    /**
     * getMatch
     * @param {string} shard 
     * @param {string} id 
     * @description Fetch game from DB if retrieved already, retrieve from API and cache in DB otherwise
     */
    getMatch(shard, id) {
        return this.db.query(`SELECT data FROM games WHERE id = '${id}'`)
            .then(res => {
                if(res.rows && res.rows.length > 0) return res.rows[0].data;
                return this.api.getMatch(shard, id).then(data => {
                    try {
                        this.storeMatch(data);
                        return data;
                    } catch(e) {
                        throw(e)
                    }
                });
            })
            .catch(e =>{ throw (e.stack)});
    }

    storeMatch(data) {
        this.db.pool.connect((err, client, done) => {
            const shouldAbort = (err) => {
                if (err) {
                console.error('Error in transaction', err.stack)
                client.query('ROLLBACK', (err) => {
                    if (err) {
                    console.error('Error rolling back client', err.stack)
                    }
                    // release the client back to the pool
                    done()
                })
                }
                return !!err
            }

            client.query('BEGIN', (err) => {
                if (shouldAbort(err)) return

                client.query(`INSERT into games (id, data) VALUES ($1, $2) RETURNING data`, [data.id.toString(), data], (err, res) => {
                    if (shouldAbort(err)) return

                    const users = data.rosters.map(r => r.participants.map(p => `('${p.stats.playerId.toString()}', '${p.stats.name.toString()}')`)).join(',');
                    const usersMatches = data.rosters.map(r => r.participants.map(p => `('${p.stats.playerId.toString()}', '${data.id.toString()}')`)).join(',');

                    client.query(`INSERT into players (id, name) VALUES ${users} ON CONFLICT DO NOTHING`, [], (err, res) => {
                        if (shouldAbort(err)) return

                        client.query(`INSERT into playersgames (players_id, games_id) VALUES ${usersMatches}`, [], (err, res) => {
                            if (shouldAbort(err)) return
                            
                            client.query('COMMIT', (err) => {
                                if (err) {
                                    console.error('Error committing transaction', err.stack)
                                }
                                done();
                            })
                        })
                    })
                })
            })
        });
    }
}