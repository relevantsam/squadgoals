import PUBGAPI from '../../../services/PUBGAPI';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const shard = req.query.shard || "pc-na";
    const filters = {};
    if(req.query.playerNames) filters.playerNames = req.query.members;
    const api = new PUBGAPI();
    const playerNames = filters.playerNames.split(',');

    api.getMatches(shard, filters).then((response) => {
        console.log(response.length, 'matches found');
        let result = response.map((data) => { 
            return {
                id: data.id,
                squad: data.rosters.find(r => r.participants.find(p => playerNames.indexOf(p.stats.name) > -1))
            }
        })
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

export {router as SquadsRouter};