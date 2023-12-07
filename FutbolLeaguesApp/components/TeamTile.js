import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TeamTile = ({ id, imageUrl, name, city, year }) => {
  const navigation = useNavigation();

  function onSelectTeamHandler() {
    // navigation.navigate("Team");
    navigation.navigate("Team", {
        screen: "TeamInfo",
        params: {teamName: name}
    })
  }
  return (
    <View style={styles.teamItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onSelectTeamHandler}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{name}</Text>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{city}</Text>
            <Text style={styles.detailsItem}>{year}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TeamTile;

const styles = StyleSheet.create({
  teamItem: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 20,
    height: 250,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    backgroundColor: "#ccc",
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: 'center',
    marginTop: 8,
    color: "#334155"
  },
  details: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
   
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
