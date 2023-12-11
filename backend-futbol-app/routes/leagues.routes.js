const express = require('express');
const router = express.Router();
const leagues = require('../controllers/app.controller');

router.get('/', leagues.getLeagues);

module.exports = router;
