import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { homeStyles } from "./styles/home.styles";

export const CategoryTileComponent = ({ coin }) => {
  return (
    <TouchableOpacity onPress={() => console.log(coin.item.name)}>
      <View style={homeStyles.container}>
        <View style={homeStyles.imageContainer}>
          <Image source={coin.item.assetImage} style={homeStyles.coinImage} />
        </View>
        <Text style={homeStyles.coinName}>{coin.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
