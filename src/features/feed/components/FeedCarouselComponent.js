import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import {
  FeedHeading,
  MyFeedScreenView,
} from "../components/styles/feed.styles";
import { AssetChip } from "../../../components/styles/global.styles";

export const FeedComponent = ({ data }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <>
      {data.map((item, index) => {
        return (
          <MyFeedScreenView key={index} height={height} width={width}>
            <Image
              source={{ uri: item.coinImage }}
              style={{ resizeMode: "cover", height: 300, width: width }}
            />
            <View style={{ padding: 10 }}>
              <AssetChip>{item.assetName}</AssetChip>
              <FeedHeading>{item.coinDescription}</FeedHeading>
            </View>
          </MyFeedScreenView>
        );
      })}
    </>
  );
};
