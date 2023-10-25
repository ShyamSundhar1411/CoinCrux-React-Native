import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import {
  FeedHeading,
  MyFeedScreenView,
  FeedDescription,
} from "../components/styles/feed.styles";
import { AssetChip } from "../../../components/styles/global.styles";
import { TimeAgo } from "../../../utils/time.function";

export const FeedComponent = ({ data }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <>
      {data.map((item, index) => {
        const time = TimeAgo({ time: item.createdAt });
        return (
          <MyFeedScreenView key={index} height={height} width={width}>
            <Image
              source={{ uri: item.coinImage }}
              style={{ resizeMode: "cover", height: 200, width: width }}
            />
            <View style={{ padding: 10 }}>
              <AssetChip>{item.assetName}</AssetChip>
              <FeedHeading>{item.coinHeading}</FeedHeading>
              <FeedDescription>{time}</FeedDescription>
            </View>
          </MyFeedScreenView>
        );
      })}
    </>
  );
};
