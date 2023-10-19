import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MyFeedScreen } from "../../features/feed/screens/my.feed.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { HomeScreen } from "../../features/home/screens/home.screen";

const TAB_ICON = {
  Home: "md-restaurant",
  News: "md-map",
  Settings: "md-settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "purple",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="News" component={MyFeedScreen} />
    <Tab.Screen name="Settings" component={AccountScreen} />
  </Tab.Navigator>;
};
