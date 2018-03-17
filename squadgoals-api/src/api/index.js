import { StatusRouter } from './status';

const express = require('express');
const router = express.Router();

router.use('/status', StatusRouter)

export {router as ApiRouter};