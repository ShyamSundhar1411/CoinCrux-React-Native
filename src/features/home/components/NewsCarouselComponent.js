import React from "react";
import { Dimensions, View, Text } from "react-native";
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
        height={400}
        autoplay={true}
        mode="parallax"
        scrollEnabled={false}
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
              <Text>{item.coinDescription}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};
