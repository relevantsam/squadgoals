import { pubgApiWrapper as PUBGAPI } from 'pubg-api-wrapper';
import { SquadsRouter } from './squad';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const shard = req.query.shard || "pc-na";
    const api = new PUBGAPI(process.env.PUBG_TOKEN);
    let filters = {};
    if(req.query.playerNames) filters = { playerNames: req.query.player};

    api.getMatches(shard, filters).then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

router.get('/:matchId', (req, res) => {
    const shard = req.query.shard || "pc-na";
    const api = new PUBGAPI(process.env.PUBG_TOKEN);
    
    api.getMatch(shard, req.params.matchId).then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
})

router.use('/squads', SquadsRouter)

export {router as MatchesRouter};