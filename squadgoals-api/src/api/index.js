import { StatusRouter } from './status';
import { MatchesRouter } from './matches';

const express = require('express');
const router = express.Router();

router.use('/status', StatusRouter)
router.use('/matches', MatchesRouter)

export {router as ApiRouter};