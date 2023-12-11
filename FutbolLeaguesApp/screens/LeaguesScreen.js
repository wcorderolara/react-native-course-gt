import { FlatList } from "react-native";
// import { LEAGUES } from "../data/dummy-database";
import { LeagueTile } from "../components";
import { useState, useEffect, useContext} from "react";
import {fetchLeagues} from "../utils/http"
import { TeamContext } from "../store/ctx/team-context";

const LeaguesScreen = () => {
  // const [leagues, setLeagues] = useState([]);
  const {leagues, updateLeagues} = useContext(TeamContext);

  useEffect( () => {
    async function getLeagues() {
      const _leagues = await fetchLeagues();
      updateLeagues(_leagues);
    }

    getLeagues();
  }, [])

  return (
    <FlatList
      data={leagues}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return <LeagueTile {...itemData.item} />;
      }}
    />
  );
};

export default LeaguesScreen;
