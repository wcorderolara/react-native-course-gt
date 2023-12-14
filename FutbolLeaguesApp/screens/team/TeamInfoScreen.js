import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { fetchTeamInfo } from "../../utils/http";
import { TeamContext } from "../../store/ctx/team-context";
import RenderHTML from "react-native-render-html";

const TeamInfoScreen = ({ route, navigation }) => {
  const [teamInfo, setTeamInfo] = useState({});
  const { teamId } = useContext(TeamContext);
  const { width } = useWindowDimensions();

  useLayoutEffect(() => {
    async function getTeamInfo(id) {
      const _info = await fetchTeamInfo(id);
      setTeamInfo(_info);
    }
    getTeamInfo(teamId);
  }, [teamId, navigation]);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.singleContainer}>
        <Text style={styles.singleTitle}>Presidente:</Text>
        <Text style={styles.singleText}>{teamInfo.president}</Text>
      </View>
      <View style={styles.singleContainer}>
        <Text style={styles.singleTitle}>Estadio:</Text>
        <Text style={styles.singleText}>{teamInfo.stadium}</Text>
      </View>
      <View style={styles.singleContainer}>
        <Text style={styles.singleTitle}>Historia General</Text>
      </View>
      <View>
        {teamInfo.info ? (
          <RenderHTML source={{ html: teamInfo.info }} contentWidth={width} tagsStyles={tagStyles} />
        ) : (
          <RenderHTML
            source={{ html: "<b>No hay informaci&oacute;n del equipo</b>" }}
            contentWidth={width}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default TeamInfoScreen;

const tagStyles = {
  p: {
    fontSize: 18,
    color: "#1e293b",
    lineHeight: 30,
    marginBottom: 5,
    textAlign: "justify"
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 22,
  },
  singleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  singleTitle: {
    color: "#1f2937",
    fontSize: 22,
    fontWeight: "bold",
  },
  singleText: {
    color: "#1e293b",
    fontSize: 18,
    marginLeft: 10,
  },
});
