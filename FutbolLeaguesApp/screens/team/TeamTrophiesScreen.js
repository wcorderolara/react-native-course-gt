import { StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect, useState, useContext, useEffect } from "react";
import { fetchTeamTrophies } from "../../utils/http";
import { TeamContext } from "../../store/ctx/team-context";
import { TrophieCard } from "../../components/team";

const TeamTrophiesScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [trophies, setTrophies] = useState([]);
  const { teamId } = useContext(TeamContext);

  const getTrophies = async () => {
    try {
      const _trophies = await fetchTeamTrophies(teamId);
      setTrophies(_trophies);
    } catch (error) {
      console.log(error.message);
    }
  };

  useLayoutEffect(() => {
    const fetchData = navigation.addListener("tabPress", async () => {
      await getTrophies();
    });
    return fetchData;
  }, [navigation]);

  return (
    <>
      <FlatList
        data={trophies}
        renderItem={(itemData) => {
          return (
            <TrophieCard
              competition={itemData.item.competition}
              titles={itemData.item.titles}
              seasons={itemData.item.seasons}
            />
          );
        }}
      />
    </>
  );
};

export default TeamTrophiesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
