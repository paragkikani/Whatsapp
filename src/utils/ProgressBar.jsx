import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors} from '../themes/Colors';

const ProgressBar = props => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const animationProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        props.closeModal();
      }
    });
  };

  useEffect(() => {
    animationProgress();
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          style.progress,
          {
            width: progressAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};
const style = StyleSheet.create({
  progress: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
});
export default ProgressBar;
