import styled from "styled-components/native";
import { List } from "react-native-paper";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
