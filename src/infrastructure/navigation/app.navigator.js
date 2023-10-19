import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../features/home/screens/home.screen";
import { MyFeedScreen } from "../../features/feed/screens/my.feed.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { styles } from "../../components/styles/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Home: "md-home",
  Feed: "md-newspaper-outline",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return {
    tabBarActiveTintColor: theme.colors.bg.theme,
    tabBarInactiveTintColor: "gray",
    tabBarShowLabel: false,
    tabBarStyle: [
      {
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: "white",
        borderRadius: 15,
        height: 90,
        ...styles.shadow,
      },
    ],
    tabBarIcon: ({ size, color, focused }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={MyFeedScreen} />
      <Tab.Screen name="Settings" component={AccountScreen} />
    </Tab.Navigator>
  );
};
