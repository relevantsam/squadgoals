import PUBGAPI from '../../services/PUBGAPI';

const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const api = new PUBGAPI();

    api.getStatus().then((response) => {
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

export {router as StatusRouter};