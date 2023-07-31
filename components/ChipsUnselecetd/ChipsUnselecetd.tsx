import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import theme from '../../theme';

export function ChipsUnselecetd() {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>
        Label
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    display: 'inline-flex',
    height: '34rem',
    alignItems: 'center',
    gap: '8rem',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    paddingVertical: '4rem',
    paddingHorizontal: '15rem',
    borderRadius: '17rem',
  },
  label: {
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: '14rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22rem /* 157.143% */',
    letterSpacing: '-0.41rem',
  },
});
