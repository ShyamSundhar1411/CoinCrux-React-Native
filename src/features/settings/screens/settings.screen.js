import React from "react";
import { Switch, List } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SettingsItem } from "../components/styles/settings.styles";
import { styles, ThemeText } from "../../../components/styles/global.styles";
import { useTheme } from "../../../infrastructure/theme/theme.services";

export const SettingsScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <List.Section>
        <SettingsItem
          theme={theme}
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
              onValueChange={() => {
                toggleTheme();
                console.log(isDarkMode);
              }}
            />
          )}
        />
        <SettingsItem
          theme={theme}
          title="Terms & Conditions"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => (
            <List.Icon {...props} color="black" icon="file-document-edit" />
          )}
        />
        <SettingsItem
          theme={theme}
          title="Privacy Policy"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => (
            <List.Icon {...props} color="black" icon="shield-account" />
          )}
        />
        <SettingsItem
          theme={theme}
          title="About Us"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => (
            <List.Icon {...props} color="black" icon="information-variant" />
          )}
        />
        <SettingsItem
          theme={theme}
          title="Rate App"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="star" />}
        />
        <SettingsItem
          theme={theme}
          title="Share App"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="share" />}
        />
      </List.Section>
    </SafeAreaView>
  );
};
