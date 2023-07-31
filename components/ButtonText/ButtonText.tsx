import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import theme from '../../theme';

export function ButtonText() {
  return (
    <View style={styles.root}>
      <Text style={styles.action}>
        action
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '64rem',
    height: '18rem',
    paddingRight: '2rem',
    paddingLeft: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '0rem',
  },
  action: {
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18rem /* 120% */',
    letterSpacing: '-0.01rem',
    textTransform: 'uppercase',
  },
});
