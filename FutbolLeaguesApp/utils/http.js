import axios from 'axios';
const baseUrl = "http://10.0.2.2:3004/futbol-leagues-app/v1";

export async function fetchLeagues() {
    const response = await axios.get(`${baseUrl}/leagues`);
    const leagues = response.data;

    return leagues;
}

export async function fetchTeams(leagueId) {
    const response = await axios.get(`${baseUrl}/teams/${leagueId}`);
    const teams = response.data;

    return teams;
}

export async function fetchTeamInfo(teamId) {
    const response = await axios.get(`${baseUrl}/teams/info/${teamId}`);
    const info = response.data.data;

    return info
}

export async function fetchTeamTrophies(teamId) {
    const response = await axios.get(`${baseUrl}/teams/trophies/${teamId}`);
    const trophies = response.data.data;

    return trophies
}

