import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {IconCheck} from '../../components/IconCheck';
import theme from '../../theme';

export function ChipsSelecetd() {
  return (
    <View style={styles.root}>
      <IconCheck/>
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
    backgroundColor: '#D6B6FF',
    flexDirection: 'row',
    paddingVertical: '4rem',
    paddingHorizontal: '15rem',
    borderRadius: '17rem',
  },
  label: {
    color: '#6C0EE4',
    fontFamily: 'SF Pro Text',
    fontSize: '14rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '22rem /* 157.143% */',
    letterSpacing: '-0.41rem',
  },
});
