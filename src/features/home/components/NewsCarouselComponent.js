import React from "react";
import { Dimensions, View } from "react-native";
import { Card } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";
import { AssetChip } from "../../../components/styles/global.styles";

export const CarouselComponent = ({ data }) => {
  const width = Dimensions.get("window").width;
  const height = width / 2;
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={height}
        autoplay={true}
        mode="parallax"
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log(index)}
        parallaxScrollingScale={0.9}
        parallaxScrollingOffset={50}
        data={data}
        renderItem={({ item }) => (
          <Card>
            <Card.Cover source={{ uri: item.coinImage }} />
            <Card.Content>
              <AssetChip>{item.assetName}</AssetChip>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};
