import { LeaguesScreen, LeagueTeamsScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import TeamNavigator from "./TeamNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Leagues"
      screenOptions={{
        headerStyle: { backgroundColor: "#030712" },
        headerTintColor: "#f9fafb",
        contentStyle: { backgroundColor: "#f3f4f6" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Leagues"
        component={LeaguesScreen}
        options={{ title: "Todas las Ligas", headerTitleAlign: "center" }}
      />
      <Stack.Screen name="LeagueTeams" component={LeagueTeamsScreen} />
      <Stack.Screen name="Team" component={TeamNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigator