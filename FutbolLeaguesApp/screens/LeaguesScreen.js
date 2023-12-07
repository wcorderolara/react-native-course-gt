import { FlatList } from "react-native";
import { LEAGUES } from "../data/dummy-database";
import { LeagueTile } from "../components";

const LeaguesScreen = () => {
  return (
    <FlatList
      data={LEAGUES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return <LeagueTile {...itemData.item} />;
      }}
    />
  );
};

export default LeaguesScreen;
