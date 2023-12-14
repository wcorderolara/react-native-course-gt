import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import TeamContextProvider from "./store/ctx/team-context";
import { MainNavigator } from "./navigators";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TeamContextProvider>
        <MainNavigator/>
      </TeamContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
