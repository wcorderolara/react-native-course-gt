import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Platform
} from "react-native";
import { LEAGUES } from "../data/dummy-database";

const LeaguesScreen = () => {
  return (
    <FlatList
      data={LEAGUES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <View style={styles.leagueItem}>
            <Pressable 
                android_ripple={{color: "#ccc"}}
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
            >
              <View style={styles.innerContainer}>
                <Image 
                    source={{ uri: itemData.item.imageUrl }}
                    style={styles.image}
                    resizeMode="contain"
                    />
                <Text style={styles.title}>{itemData.item.name}</Text>
                <View style={styles.details}>
                  <Text style={styles.detailsItem}>{itemData.item.country}</Text>
                  <Text style={styles.detailsItem}> | </Text>
                  <Text style={styles.detailsItem}>{itemData.item.year}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        );
      }}
    />
  );
};

export default LeaguesScreen;

const styles = StyleSheet.create({
  leagueItem: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 20,
    height: 250,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    backgroundColor: "#ccc",
    opacity: 0.25
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  details: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailsItem: {
    marginHorizontal: 8,
    fontSize: 14
  },
  image: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }
});
