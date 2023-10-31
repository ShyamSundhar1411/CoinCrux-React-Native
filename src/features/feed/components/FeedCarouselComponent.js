import React, { Component } from "react";
import { Dimensions, Animated, PanResponder, View, Image } from "react-native";
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
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.swipedCardPosition = new Animated.ValueXY({ x: 0, y: -this.height });
    this.position = new Animated.ValueXY();
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0 && this.state.currentIndex > 0) {
          this.swipedCardPosition.setValue({
            x: 0,
            y: -this.height + gestureState.dy,
          });
        } else {
          this.position.setValue({ x: 0, y: gestureState.dy });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (
          this.state.currentIndex > 0 &&
          gestureState.dy > 50 &&
          gestureState.vy > 0.7
        ) {
          Animated.timing(this.swipedCardPosition, {
            toValue: { x: 0, y: 0 },
            duration: 400,
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex - 1 });
            this.swipedCardPosition.setValue({ x: 0, y: -this.height });
          });
        } else if (-gestureState.dy > 50 && -gestureState.vy > 0.7) {
          Animated.timing(this.position, {
            toValue: { x: 0, y: -this.height },
            duration: 400,
            useNativeDriver: true,
          }).start(() => {
            this.setState({ currentIndex: (this.state.currentIndex + 1) % 10 });
            this.position.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.parallel([
            Animated.spring(this.position, {
              toValue: { x: 0, y: 0 },
            }),
            Animated.spring(this.swipedCardPosition, {
              toValue: { x: 0, y: -this.height },
            }),
          ]);
        }
      },
    });
  }
  render() {
    const { data } = this.props;
    const interpolatedStyle = {
      transform: this.position.getTranslateTransform(),
    };
    return (
      <>
        {data.map((item, index) => {
          const time = TimeAgo({ time: item.createdAt });
          if (index < this.state.currentIndex) {
            return null;
          }
          if (index == this.state.currentIndex) {
            return (
              <Animated.View
                key={index}
                style={interpolatedStyle}
                {...this.PanResponder.panHandlers}
              >
                <MyFeedScreenView height={this.height} width={this.width}>
                  <Image
                    source={{ uri: item.coinImage }}
                    style={{
                      resizeMode: "cover",
                      height: 200,
                      width: this.width,
                    }}
                  />
                  <View style={{ padding: 10 }}>
                    <AssetChip>{item.assetName}</AssetChip>
                    <FeedHeading>{item.coinHeading}</FeedHeading>
                    <FeedDescription>{time}</FeedDescription>
                  </View>
                </MyFeedScreenView>
              </Animated.View>
            );
          } else {
            return (
              <Animated.View key={index}>
                <MyFeedScreenView height={this.height} width={this.width}>
                  <Image
                    source={{ uri: item.coinImage }}
                    style={{
                      resizeMode: "cover",
                      height: 200,
                      width: this.width,
                    }}
                  />
                  <View style={{ padding: 10 }}>
                    <AssetChip>{item.assetName}</AssetChip>
                    <FeedHeading>{item.coinHeading}</FeedHeading>
                    <FeedDescription>{time}</FeedDescription>
                  </View>
                </MyFeedScreenView>
              </Animated.View>
            );
          }
        })}
      </>
    );
  }
}

export default FeedComponent;
