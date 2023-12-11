const express = require('express');
const router = express.Router();
const teams = require('../controllers/app.controller');

router.get('/:leagueId', teams.getTeamsByLeague);
router.get('/trophies/:teamId', teams.getTrophiesByTeam);
router.get('/info/:teamId', teams.getInfoByTeam);

module.exports = router;
