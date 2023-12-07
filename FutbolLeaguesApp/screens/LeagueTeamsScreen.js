import { StyleSheet, Text, View, FlatList } from "react-native";
import { LEAGUES, TEAMS } from "../data/dummy-database";
import { useState, useEffect, useLayoutEffect } from "react";
import { TeamTile } from "../components";

const LeagueTeamsScreen = ({ route, navigation }) => {
  const [leagueTeams, setLeagueTeams] = useState([]);

  useLayoutEffect(() => {
    if (route.params?.leagueId) {
      const teams = TEAMS.filter(
        (team) => team.idLeague === route.params.leagueId
      );
      const screenTitle = LEAGUES.find( (item) => item.id === route.params.leagueId).name;

      setLeagueTeams(teams);
      navigation.setOptions({
        title: screenTitle
      })
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
