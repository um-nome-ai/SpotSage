import {View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {IconShoppingCart} from '../../components/IconShoppingCart';
import theme from '../../theme';

export function Tab() {
  return (
    <View style={styles.root}>
      <View style={styles.block}/>
      <IconShoppingCart/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '138rem',
    height: '80rem',
  },
  block: {
    width: '138rem',
    height: '80rem',
    flexShrink: 0,
  },
});
