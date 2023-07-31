import {View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Vector from '../../assets/vectors/Vector.svg';
import Vector2 from '../../assets/vectors/Vector2.svg';

export function IconPlus() {
  return (
    <View style={styles.root}>
      <Vector/>
      <Vector2/>
    </View>
  );
}

const styles = EStyleSheet.create({
  $scale: 0.06,
  root: {
    width: '24rem',
    height: '24rem',
  },
});
