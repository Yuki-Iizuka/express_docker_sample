const express = require('express');
const router = express.Router();

// ルーティングごとのハンドラ
const StatusHandler = require('./handlers/statusHandler')

router.get('/status', (req, res) => StatusHandler.get(req, res));

module.exports = router;
