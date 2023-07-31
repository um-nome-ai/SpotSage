import { View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {IconShoppingCart} from '../../components/IconShoppingCart';
import theme from '../../theme';

export function ButtonPrimaryWithIcon() {
  return (
    <View style={styles.root}>
      <IconShoppingCart/>
      <Text style={styles.action}>
        action
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    display: 'inline-flex',
    height: '56rem',
    alignItems: 'center',
    gap: '16rem',
    backgroundColor: theme.colors.primaryButton,
    flexDirection: 'row',
    paddingVertical: '16rem',
    paddingHorizontal: '24rem',
    borderRadius: '8rem',
  },
  action: {
    color: '#FFF',
    fontFamily: 'SF Pro Text',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18rem /* 120% */',
    letterSpacing: '-0.01rem',
    textTransform: 'uppercase',
  },
});
