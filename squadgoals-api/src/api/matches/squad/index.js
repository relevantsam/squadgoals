import { pubgApiWrapper as PUBGAPI } from 'pubg-api-wrapper';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const shard = req.query.shard || "pc-na";
    const filters = { gameMode: "squad,duos,squad-fpp,duos-fpp"};
    if(req.query.playerNames) filters.playerNames = req.query.playerNames;
    const api = new PUBGAPI(process.env.PUBG_TOKEN);
    const playerNames = filters.playerNames.split(',');

    api.getMatches(shard, filters).then((response) => {
        let result = response.map(({createdAt, id, rosters, gameMode}) => { 
            return {
                id: id,
                createdAt: createdAt,
                squad: rosters.find(r => r.participants.find(p => playerNames.indexOf(p.stats.name) > -1)),
                gameMode: gameMode
            }
        })
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

export {router as SquadsRouter};