import { View, Text } from 'react-native'
import React from 'react'
import {
  TeamInfoScreen,
  TeamTrophiesScreen,
  TeamLeyendsScreen,
  TeamNewsScreen,
} from "../screens/team";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TeamContext } from "../store/ctx/team-context";
import { useContext, useEffect } from "react";
const Tab = createBottomTabNavigator();

const TeamNavigator = ({navigation}) => {
  const { headerTeamTitle } = useContext(TeamContext);

  useEffect( () => {
    navigation.setOptions({
      title: headerTeamTitle
    })
  },[headerTeamTitle, navigation])

  // const getDataChangeTab = async (route) => {
  //   if(route.state) {
  //     const currentTab = route.state.routeNames[route.state.index];
  //     if(currentTab === 'TeamTrophies') {
  //       await TeamTrophiesScreen.getTrophies();
  //     }
  //   }
  // }

  return (
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
}

export default TeamNavigator