import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Plus from '../../assets/images/plus.png';

export function IconPlus() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Image source={Plus} style={styles.root} contentFit="cover" />
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  $scale: 0.06,
  root: {
    width: '47rem',
    height: '47rem'
  },
});
