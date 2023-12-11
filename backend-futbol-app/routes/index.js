const express = require('express');
const router = express.Router();
const teamRoutes = require('./teams.routes');
const leagueRoutes = require('./leagues.routes');

router.use('/teams', teamRoutes);
router.use('/leagues', leagueRoutes);

module.exports = router;
