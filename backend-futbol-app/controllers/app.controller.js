const { LEAGUES, TEAMS, TROPHIES, INFO } = require('../db/dummy-database');

exports.getLeagues = (req, res) => {
    res.send(LEAGUES);
}

exports.getTeamsByLeague = (req, res) => {
    const teamsLeague = TEAMS.filter( (team) => team.idLeague == req.params.leagueId);

    res.json({status: res.statusCode, data: teamsLeague});
}

exports.getTrophiesByTeam = (req, res) => {
    const teamTrohpies = TROPHIES.filter( (trophie) => trophie.idTeam == req.params.teamId);
    res.json({status: res.statusCode, data: teamTrohpies});
}

exports.getInfoByTeam = (req, res) => {
    const teamInfo = INFO.filter( (info) => info.idTeam == req.params.teamId);
    res.json({status: res.statusCode, data: teamInfo[0]})
}

