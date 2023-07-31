import {View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {IconShoppingCart} from '../../components/IconShoppingCart';
import theme from '../../theme';

export function ButtonSecondary() {
  return (
    <View style={styles.root}>
      <IconShoppingCart/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10rem',
    backgroundColor: theme.colors.primaryButton,
    flexDirection: 'row',
    paddingVertical: '10rem',
    paddingHorizontal: '29rem',
    borderRadius: '8rem',
  },
});
