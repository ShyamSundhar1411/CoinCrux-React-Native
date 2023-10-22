import React from "react";
import { Dimensions, View, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Card } from "react-native-paper";
import { AssetChip } from "../../../components/styles/global.styles";
import { MyFeedScreenView } from "../components/styles/feed.styles";

export const FeedCarouselComponent = ({ data }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <MyFeedScreenView>
      <Carousel
        modeConfig={{
          snapDirection: "left",
          stackInterval: 8,
        }}
        mode="horizontal-stack"
        showLength={3}
        width={width}
        height={height}
        autoPlay={true}
        data={data}
        onSnapToItem={(index) => console.log(index)}
        renderItem={({ item }) => (
          <Card>
            <Card.Cover source={{ uri: item.coinImage }} />
            <Card.Content>
              <AssetChip>{item.assetName}</AssetChip>
              <Text>{item.coinDescription}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </MyFeedScreenView>
  );
};
