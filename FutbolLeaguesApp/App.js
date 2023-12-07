import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { LeaguesScreen, LeagueTeamsScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  TeamInfoScreen,
  TeamTrophiesScreen,
  TeamLeyendsScreen,
  TeamNewsScreen,
} from "./screens/team";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import TeamContextProvider from "./store/ctx/team-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TeamNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#f9fafb",
      tabBarInactiveTintColor: "#64748b",
      tabBarStyle: { backgroundColor: "#030712" },
    }}
  >
    <Tab.Screen
      name="TeamInfo"
      component={TeamInfoScreen}
      options={{
        tabBarLabel: "Info",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="information-circle" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="TeamTrophies"
      component={TeamTrophiesScreen}
      options={{
        tabBarLabel: "Palmares",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="trophy" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="TeamLeyends"
      component={TeamLeyendsScreen}
      options={{
        tabBarLabel: "Leyendas",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account-star"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="TeamNews"
      component={TeamNewsScreen}
      options={{
        tabBarLabel: "News",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="newspaper" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TeamContextProvider>
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
      </TeamContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
