import { pubgApiWrapper as PUBGAPI } from 'pubg-api-wrapper';
import { DbService } from '../db';

export class MatchService {
    constructor(token) {
        this.db = new DbService();
        this.api = new PUBGAPI(token);
    }
    getMatch(shard, id) {
        return this.db.query(`SELECT data FROM games WHERE id = '${id}'`)
        .then(res => {
            if(res.rows && res.rows.length > 0) return res.rows[0].data;
            return this.api.getMatch(shard, id).then(data => {
                return this.db.query(`INSERT into games (id, data) VALUES ($1, $2) RETURNING data`, [data.id.toString(), data]).then(results => results.rows[0]);
            });
        })
        .catch(e => console.error(e.stack));
    }
}