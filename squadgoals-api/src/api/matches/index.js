import PUBGAPI from '../../services/PUBGAPI';
import { SquadsRouter } from './squad';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const shard = req.query.shard || "pc-na";
    const api = new PUBGAPI();
    let filters = {};
    if(req.query.player) filters = { playerNames: req.query.player};

    api.getMatches(shard, filters).then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

router.use('/squads', SquadsRouter)

export {router as MatchesRouter};