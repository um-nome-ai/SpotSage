import {View} from 'react-native';
import { Image } from 'expo-image'
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Vector from '../../assets/vectors/Vector.svg';
import Vector2 from '../../assets/vectors/Vector2.svg';
import Vector3 from '../../assets/vectors/Vector3.svg';
import Vector4 from '../../assets/vectors/Vector4.svg';
import theme from '../../theme';

export function IconGrid() {
  return (
    <View style={styles.root}>
      <Vector/>
      <Vector2/>
      <Vector3/>
      <Vector4/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '24rem',
    height: '24rem',
  },
});
