import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';

interface Props {
  type?: "positive" | "negative";
}

const positive1 = require("../../../assets/positive/1.png");
const negative1 = require("../../../assets/negative/1.png");

const Onions: React.FC<Props> = ({ type }) => {
  const animationOnion = useRef(new Animated.Value(0)).current; // 이동 애니메이션
  const opacityOnion = useRef(new Animated.Value(1)).current; // 투명도 애니메이션
  const scaleOnion = useRef(new Animated.Value(1)).current; // 크기 애니메이션

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animationOnion, {
        toValue: type === "positive" ? 70 : (type === "negative" ? -40 : 0),
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(opacityOnion, {
        toValue: type ? 1 : 0.3,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(scaleOnion, {
        toValue: type ? 1 : 0.8,
        duration: 700,
        useNativeDriver: true,
      })
    ]).start();
  }, [type]);

  return (
    <View style={styles.onionsStyle}>
      <Animated.View
        style={[
          styles.onion,
          {
            transform: [
              { translateX: type === "positive" ? animationOnion : new Animated.Value(0) },
              { scale: type === "positive" ? scaleOnion : new Animated.Value(0.8) }
            ],
            opacity: type === "positive" ? opacityOnion : new Animated.Value(0.3),
            zIndex: type === "positive" ? 1 : 0,
          },
        ]}
      >
        <Image source={positive1} style={styles.onionStyle} />
        <Text>긍정 양파</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.onion,
          {
            transform: [
              { translateX: type === "negative" ? animationOnion : new Animated.Value(0) },
              { scale: type === "negative" ? scaleOnion : new Animated.Value(0.8) }
            ],
            opacity: type === "negative" ? opacityOnion : new Animated.Value(0.3),
            zIndex: type === "negative" ? 1 : 0,
          },
        ]}
      >
        <Image source={negative1} style={styles.onionStyle} />
        <Text>부정 양파</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  onionsStyle: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  onion: {
    alignItems: 'center',
  },
  onionStyle: {
    width: 170,
    height: 300,
  },
});

export default Onions;
