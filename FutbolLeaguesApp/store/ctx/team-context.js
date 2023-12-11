import { createContext, useEffect, useState } from "react";
import { TEAMS } from "../../data/dummy-database";

export const TeamContext = createContext({
  headerTeamTitle: "",
  updateHeaderTitle: () => {},
  teamId: "",
  updateTeamId: (id) => {},
  leagues: [],
  updateLeagues: (_leagues) => {}
});

function TeamContextProvider({ children }) {
  const [headerTeamTitle, setHeaderTeamTitle] = useState("Titulo por defecto");
  const [teamId, setTeamId] = useState(0);
  const [leagues, setLeagues] = useState([]);

  function updateTeamId(id) {
    setTeamId((prev) => {
      if (prev !== id) {
        return id;
      }
      return prev;
    });
  }

  function updateHeaderTitle() {
    if (teamId) {
      let teamName = TEAMS.find((team) => team.id == teamId).name;
      setHeaderTeamTitle((prev) => {
        if (prev !== teamName) {
          return teamName;
        }
        return prev;
      });
    }
  }

  function updateLeagues(_leagues) {
    setLeagues(_leagues);
  }

  useEffect ( () => {
    updateHeaderTitle();
  }, [teamId])

  const value = {
    headerTeamTitle: headerTeamTitle,
    updateHeaderTitle: updateHeaderTitle,
    teamId: teamId,
    updateTeamId: updateTeamId,
    leagues: leagues,
    updateLeagues: updateLeagues
  };
  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}

export default TeamContextProvider;
