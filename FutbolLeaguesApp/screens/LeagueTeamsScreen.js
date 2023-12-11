import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useContext, useLayoutEffect } from "react";
import { TeamTile } from "../components";
import { fetchTeams } from "../utils/http";
import { TeamContext } from "../store/ctx/team-context";

const LeagueTeamsScreen = ({ route, navigation }) => {
  const [leagueTeams, setLeagueTeams] = useState([]);
  const {leagues} = useContext(TeamContext);

  useLayoutEffect(() => {
    async function getTeams(leagueId) {
      const _teams = await fetchTeams(leagueId);
      setLeagueTeams(_teams.data);
    }
    if (route.params?.leagueId) {
      const screenTitle = leagues.find( (item) => item.id === route.params.leagueId).name;
      navigation.setOptions({
        title: screenTitle
      })

      getTeams(route.params.leagueId);
    }
  }, [route.params.leagueId, navigation]);

  return (
    <FlatList
      data={leagueTeams}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
            <TeamTile {...itemData.item}/>
        )
      }}
      numColumns={2}
    />
  );
};

export default LeagueTeamsScreen;

const styles = StyleSheet.create({});
