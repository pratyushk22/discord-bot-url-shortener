import express from 'express';
import handle_shorturl from './shorturl.js';

const router = express.Router();

router.get('/:shortID', handle_shorturl);

export default router;