import { pubgApiWrapper as PUBGAPI } from 'pubg-api-wrapper';
import { SquadsRouter } from './squad';
import { MatchService } from '../../services/MatchService';

const express = require('express');
const matches = new MatchService(process.env.PUBG_TOKEN);
const router = express.Router();
router.use('/squads', SquadsRouter)

router.get('', (req, res) => {
    const shard = req.query.shard || "pc-na";
    let filters = {};
    if(req.query.playerNames) filters = { playerNames: req.query.player};

    const api = new PUBGAPI(process.env.PUBG_TOKEN);

    api.getMatches(shard, filters, null, null, "-createdAt").then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

router.get('/:matchId', (req, res) => {
    const shard = req.query.shard || "pc-na";

    
    matches.getMatch(shard, req.params.matchId).then((response) => {
        console.log(response);
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
})

export {router as MatchesRouter};