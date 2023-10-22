import { StatusBar, Platform, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Chip } from "react-native-paper";
export const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export const ThemeText = styled.Text`
  color: ${(props) => props.theme.colors.text.theme};
`;

export const LoaderView = styled.View`
  position: absolute;
  top: 30%;
  left: 50%;
`;

export const AssetChip = styled(Chip)`
  width: 100px;
  align-items: center;
  border-width: 1px;
  margin: 10px;
`;
