import styled from "styled-components/native";

export const MyFeedScreenView = styled.View`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

export const FeedHeading = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  padding: ${(props) => props.theme.space[3]};
`;
