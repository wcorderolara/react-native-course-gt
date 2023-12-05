import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { LeaguesScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Leagues"
          screenOptions={{
            headerStyle: {backgroundColor: "#333"},
            headerTintColor: '#fafafa',
            contentStyle: {backgroundColor: "#212020"}
          }}
        >
          <Stack.Screen
            name="Leagues"
            component={LeaguesScreen}
            options={{ title: "Todas las Ligas", headerTitleAlign:"center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
