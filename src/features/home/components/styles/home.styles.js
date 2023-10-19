import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const CategoryDisplayContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const HeadingText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const homeStyles = StyleSheet.create({
  container: {
    margin: 10,
    height: 70,
    width: 70,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageContainer: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: "white",
  },
  coinImage: {
    height: 20,
    width: 20,
  },
  coinName: {
    fontSize: 10,
    color: "black",
  },
});

export const CategoryListContainer = styled.View`
  justify-content: space-evenly;
  align-items: center;
`;
