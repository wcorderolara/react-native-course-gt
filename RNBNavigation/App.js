import { StatusBar } from "expo-status-bar";
import AppNavigator from "./routes/Navigation";

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
