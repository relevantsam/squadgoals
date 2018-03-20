import PUBGAPI from '../../services/PUBGAPI';
import { SquadsRouter } from './squad';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const shard = req.query.shard || "pc-na";
    const api = new PUBGAPI();

    api.getMatches(shard, {}).then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

router.use('/squads', SquadsRouter)

export {router as MatchesRouter};