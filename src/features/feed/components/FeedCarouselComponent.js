import React, { Component } from "react";
import { Dimensions, Image, View, Animated, PanResponder } from "react-native";
import {
  FeedHeading,
  MyFeedScreenView,
  FeedDescription,
} from "../components/styles/feed.styles";
import { AssetChip } from "../../../components/styles/global.styles";
import { TimeAgo } from "../../../utils/time.function";

class FeedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.position = new Animated.ValueXY();
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {},
    });
  }
  render() {
    const { data } = this.props;
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    return (
      <>
        {data.map((item, index) => {
          const time = TimeAgo({ time: item.createdAt });
          return (
            <Animated.View key={index}>
              <MyFeedScreenView height={height} width={width}>
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
            </Animated.View>
          );
        })}
      </>
    );
  }
}

export default FeedComponent;
