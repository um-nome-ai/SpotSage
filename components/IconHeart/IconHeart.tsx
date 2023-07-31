import {View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Vector from '../../assets/vectors/Vector.svg';
import theme from '../../theme';

export function IconHeart() {
  return (
    <View style={styles.root}>
      <Vector/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '24rem',
    height: '24rem',
  },
});
