const League = require('../models/league');
const Team = require('../models/team');
const TeamInfo = require('../models/teamInfo');
const TeamTrophie = require('../models/teamTrophie');

module.exports.LEAGUES = [
    new League("L1", "La Liga", "España", "1929", "http://waltercordero.net/images/la-liga.png"),
    new League("L2", "Premier League", "Inglaterra", "1888 - 1992", "http://waltercordero.net/images/premiere-league.png"),
    new League("L3", "Bundesliga", "Alemania", "1963", "http://waltercordero.net/images/bundeliga.png"),
    new League("L4", "Serie A", "Italia", "1898", "http://waltercordero.net/images/serie-A.png"),
    new League("L5", "Ligue 1", "Francia", "1932", "http://waltercordero.net/images/ligue-1.png"),
]

module.exports.TEAMS = [
    new Team("E1", "L1", "Real Madrid", "Madrid", 1902, "http://waltercordero.net/images/real-madrid.png"),
    new Team("E2", "L1", "FC Barcelona", "Barcelona", 1899, "http://waltercordero.net/images/barcelona.png"),
    new Team("E3", "L1", "Atletico Madrid", "Madrid", 1903, "http://waltercordero.net/images/atletico-madrid.png"),
    new Team("E4", "L1", "Sevilla FC", "Sevilla", 1890, "http://waltercordero.net/images/sevilla.png"),
    new Team("E5", "L1", "Valencia CF", "Valencia", 1919, "http://waltercordero.net/images/valencia.png"),
    new Team("E6", "L1", "Real Sociedad", "San Sebastián", 1909, "http://waltercordero.net/images/real-sociedad.png"),
    new Team("E7", "L1", "Villarreal CF", "Villarreal", 1923, "http://waltercordero.net/images/villareal.png"),
    new Team("E8", "L1", "Athletic Bilbao", "Bilbao", 1898, "http://waltercordero.net/images/athletic-bilbao.png"),
    new Team("E9", "L1", "Real Betis", "Sevilla", 1907, "http://waltercordero.net/images/real-betis.png"),
    new Team("E10", "L1", "Espanyol", "Barcelona", 1900, "http://waltercordero.net/images/spanyol.png"),

    new Team("E11", "L2", "Manchester United", "Manchester", 1878, "http://waltercordero.net/images/man-u.png"),
    new Team("E12", "L2", "Liverpool", "Liverpool", 1892, "http://waltercordero.net/images/liverpool.png"),
    new Team("E13", "L2", "Manchester City", "Manchester", 1880, "http://waltercordero.net/images/manchester-city.png"),
    new Team("E14", "L2", "Chelsea", "Londres", 1905, "http://waltercordero.net/images/chelsea.png"),
    new Team("E15", "L2", "Arsenal", "Londres", 1886, "http://waltercordero.net/images/arsenal.png"),
    new Team("E16", "L2", "Tottenham Hotspur", "Londres", 1882, "http://waltercordero.net/images/tottenham.png"),
    new Team("E17", "L2", "Everton", "Liverpool", 1878, "http://waltercordero.net/images/everton.png"),
    new Team("E18", "L2", "Leicester City", "Leicester", 1884, "http://waltercordero.net/images/leicester.png"),
    new Team("E19", "L2", "West Ham United", "Londres", 1895, "http://waltercordero.net/images/west-ham.png"),
    new Team("E20", "L2", "Newcastle United", "Newcastle", 1892, "http://waltercordero.net/images/newcastle.png"),

    new Team("E21", "L3", "Bayern de Múnich", "Múnich", 1900, "http://waltercordero.net/images/bayern-munchen.png"),
    new Team("E22", "L3", "Borussia Dortmund", "Dortmund", 1909, "http://waltercordero.net/images/borussia-dortmund.png"),
    new Team("E23", "L3", "RB Leipzig", "Leipzig", 2009, "http://waltercordero.net/images/leipzig.png"),
    new Team("E24", "L3", "Bayer Leverkusen", "Leverkusen", 1904, "http://waltercordero.net/images/bayer-leverkusen.png"),
    new Team("E25", "L3", "Borussia Mönchengladbach", "Mönchengladbach", 1900, "http://waltercordero.net/images/borussia.png"),
    new Team("E26", "L3", "Schalke 04", "Gelsenkirchen", 1904, "http://waltercordero.net/images/schalke.png"),
    new Team("E27", "L3", "Wolfsburg", "Wolfsburg", 1945, "http://waltercordero.net/images/wolfsburg.png"),
    new Team("E28", "L3", "Eintracht Frankfurt", "Frankfurt", 1899, "http://waltercordero.net/images/frankfurt.png"),
    new Team("E29", "L3", "Hertha BSC", "Berlín", 1892, "http://waltercordero.net/images/hertha.png"),
    new Team("E30", "L3", "FC Augsburg", "Augsburgo", 1907, "http://waltercordero.net/images/augsburg.png"),

    new Team("E31", "L4", "Juventus", "Turín", 1897, "http://waltercordero.net/images/juventus.png"),
    new Team("E32", "L4", "Inter de Milán", "Milán", 1908, "http://waltercordero.net/images/inter-milan.png"),
    new Team("E33", "L4", "AC Milan", "Milán", 1899, "http://waltercordero.net/images/ac-milan.png"),
    new Team("E34", "L4", "AS Roma", "Roma", 1927, "http://waltercordero.net/images/as-roma.png"),
    new Team("E35", "L4", "Napoli", "Nápoles", 1926, "http://waltercordero.net/images/napoli.png"),
    new Team("E36", "L4", "Lazio", "Roma", 1900, "http://waltercordero.net/images/lazio.png"),
    new Team("E37", "L4", "Atalanta", "Bérgamo", 1907, "http://waltercordero.net/images/atalanta.png"),
    new Team("E38", "L4", "Fiorentina", "Florencia", 1926, "http://waltercordero.net/images/fiorentina.png"),
    new Team("E39", "L4", "Sampdoria", "Génova", 1946, "http://waltercordero.net/images/sampdoria.png"),
    new Team("E40", "L4", "Sassuolo", "Sassuolo", 1922, "http://waltercordero.net/images/sassuolo.png"),

    new Team("E41", "L5", "Paris Saint-Germain", "París", 1970, "http://waltercordero.net/images/psg.png"),
    new Team("E42", "L5", "Olympique de Marsella", "Marsella", 1899, "http://waltercordero.net/images/marsella.png"),
    new Team("E43", "L5", "AS Mónaco", "Mónaco", 1924, "http://waltercordero.net/images/monaco.png"),
    new Team("E44", "L5", "Lyon", "Lyon", 1950, "http://waltercordero.net/images/lyon.png"),
    new Team("E45", "L5", "Lille OSC", "Lille", 1944, "http://waltercordero.net/images/lille.png"),
    new Team("E46", "L5", "Saint-Étienne", "Saint-Étienne", 1919, "http://waltercordero.net/images/saint-etienne.png"),
    new Team("E47", "L5", "Rennes", "Rennes", 1901, "http://waltercordero.net/images/rennes.png"),
    new Team("E48", "L5", "Bordeaux", "Burdeos", 1881, "http://waltercordero.net/images/bordeaux.png"),
    new Team("E49", "L5", "Niza", "Niza", 1904, "http://waltercordero.net/images/niza.png"),
    new Team("E50", "L5", "Estrasburgo", "Estrasburgo", 1906, "http://waltercordero.net/images/estrasburgo.png"),
]

module.exports.TROPHIES = [
    new TeamTrophie("E1", "La Liga", 35,[
        "1931-32", "1932-33", "1953-54", "1954-55", "1956-57", "1957-58", "1960-61", "1961-62",
        "1962-63", "1963-64", "1964-65", "1966-67", "1967-68", "1968-69", "1971-72", "1974-75",
        "1975-76", "1977-78", "1978-79", "1979-80", "1985-86", "1986-87", "1987-88", "1988-89",
        "1989-90", "1994-95", "1996-97", "2000-01", "2002-03", "2006-07", "2007-08", "2011-12",
        "2016-17", "2019-20"
    ]),
    
    new TeamTrophie("E1", "Copa del Rey", 20, [
        "1904-05", "1905-06", "1906-07", "1907-08", "1916-17", "1933-34", "1935-36", "1945-46",
        "1946-47", "1961-62", "1969-70", "1973-74", "1974-75", "1979-80", "1981-82", "1988-89",
        "1992-93", "2010-11", "2013-14"
    ]),

    new TeamTrophie("E1", "Champions League", 14, [
        "1955-56", "1956-57", "1957-58", "1958-59", "1959-60", "1965-66", "1997-98", "1999-2000",
        "2001-02", "2013-14", "2015-16", "2016-17", "2017-18"
    ]),

    new TeamTrophie("E1", "Supercopa de España", 11, [
        "1988", "1989", "1990", "1993", "1997", "2001", "2003", "2008", "2012", "2017", "2019"
    ]),
    
    new TeamTrophie("E1", "Copa de la UEFA", 2, ["1984-85", "1985-86"]),

    new TeamTrophie("E1", "Mundial de Clubes", 5, ["1960", "1998", "2002", "2014", "2018"]),

    new TeamTrophie("E1", "Supercopa de la UEFA", 4, ["2002", "2014", "2016", "2017"])
]

module.exports.INFO = [
    new TeamInfo("E1", `<p>El <b>Real Madrid Club de Fútbol</b>, más conocido simplemente como Real Madrid, es una entidad polideportiva con sede en Madrid, España. Fue oficialmente registrada como club de fútbol por sus socios el 6 de marzo de 1902 con el objeto de la práctica y desarrollo de este deporte, si bien sus orígenes datan del año 1900, y su denominación de (Sociedad) Madrid Foot-ball Club de octubre de 1901, siendo el quinto club fundado en la capital.<br/><br/>Tuvo a Julián Palacios y los hermanos Juan Padrós y Carlos Padrós como principales valedores de su creación.<br/><br/>El 29 de junio de 1920, la entidad adquirió su designación actual mediante el otorgamiento del título honorífico de <b>Real</b> por parte de Su Majestad el Rey Alfonso XIII de España, quien también conferiría la distinción visual correspondiente incorporando la corona real en su emblema. <br/><br/>Identificado por su color blanco (del que recibe el apelativo de «blancos» o «merengues»), es uno de los cuatro clubes profesionales de fútbol del país cuya entidad jurídica no es la de sociedad anónima deportiva (S. A. D.), ya que su propiedad recae en sus más de 90 000 socios.<br/><br/> Otra salvedad comparte con el Athletic Club y el Fútbol Club Barcelona al participar sin interrupción en la máxima categoría de la Liga Nacional de Fútbol Profesional, la Primera División de España, desde su establecimiento en 1929. En ella posee los honores de haber sido el primer líder histórico de la competición,el de club con más títulos, y el de la máxima puntuación en una sola edición.</p>`, "Flotentino Pérez", "Santiago Bernabeu")
]
