import React, { useState } from "react";
import { Switch, List } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SettingsItem } from "../components/styles/settings.styles";
import { styles, ThemeText } from "../../../components/styles/global.styles";

export const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <List.Section>
        <SettingsItem
          title="Dark Mode"
          description="Toggle Dark Mode"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => (
            <List.Icon {...props} color="black" icon="moon-waning-crescent" />
          )}
          // eslint-disable-next-line react/no-unstable-nested-components
          right={(props) => (
            <Switch
              {...props}
              value={isDarkMode}
              onValueChange={() => setIsDarkMode(!isDarkMode)}
            />
          )}
        />
        <SettingsItem
          title="Terms & Conditions"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => (
            <List.Icon {...props} color="black" icon="file-document-edit" />
          )}
        />
        <SettingsItem
          title="Privacy Policy"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => (
            <List.Icon {...props} color="black" icon="shield-account" />
          )}
        />
        <SettingsItem
          title="About Us"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => (
            <List.Icon {...props} color="black" icon="information-variant" />
          )}
        />
        <SettingsItem
          title="Rate App"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="star" />}
        />
        <SettingsItem
          title="Share App"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="share" />}
        />
      </List.Section>
    </SafeAreaView>
  );
};
