const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    axios.get('/status').then((response) => {
        let data = response.data.data;
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
        res.status(err.response.status).json({message: err.response.data});
    })
});

export {router as StatusRouter};