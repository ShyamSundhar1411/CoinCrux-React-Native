import React from "react";
import { Dimensions, View, Text } from "react-native";
import { Card } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";
import { AssetChip } from "../../../components/styles/global.styles";
import { MutedText } from "./styles/home.styles";
import { TimeAgo } from "../../../utils/time.function";
export const CarouselComponent = ({ data }) => {
  const width = Dimensions.get("window").width;
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={400}
        autoplay={true}
        mode="parallax"
        scrollEnabled={false}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log(index)}
        parallaxScrollingScale={0.9}
        parallaxScrollingOffset={50}
        data={data}
        renderItem={({ item }) => {
          const time = TimeAgo(item.createdAt);
          return (
            <Card>
              <Card.Cover source={{ uri: item.coinImage }} />
              <Card.Content>
                <AssetChip>{item.assetName}</AssetChip>
                <Text>{item.coinHeading}</Text>
                <MutedText>{time}</MutedText>
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
};
