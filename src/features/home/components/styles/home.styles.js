import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const CategoryDisplayContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const HeadingText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const homeStyles = StyleSheet.create({
  container: {
    margin: 5,
    height: 70,
    width: 70,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    borderWidth: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  coinImage: {
    height: 25,
    width: 25,
  },
  coinName: {
    fontSize: 10,
    color: "black",
  },
});

export const CategoryListContainer = styled.View`
  justify-content: space-evenly;
  margin-top: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  align-items: center;
  border-color: gray;
  border-radius: ${(props) => props.theme.sizes[1]};
  border-width: 1px;
`;

export const NewsDisplayContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
