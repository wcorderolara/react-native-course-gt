import { createContext } from "react";

export const TeamContext = createContext({
    headerTeamTitle: '',
    updateHeaderTitle: () => {},
    teamId: '',
    updateTeamId: (id) => {}
});

function TeamContextProvider({children}) {

    const value = {
        headerTeamTitle: 'Titulo'
    }
    return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
}

export default TeamContextProvider;
