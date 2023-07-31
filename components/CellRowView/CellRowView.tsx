import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {IconWalking} from '../../components/IconWalking';
import {IconCheck} from '../../components/IconCheck';
import theme from '../../theme';

export function CellRowView() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle45}/>
      <Text style={styles.text}>
        I’ll pick it up myself
      </Text>
      <IconWalking/>
      <IconCheck/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '414rem',
    height: '56rem',
  },
  rectangle45: {
    width: '414rem',
    height: '56rem',
    flexShrink: 0,
  },
  text: {
    width: '325rem',
    height: '24rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'SF Pro Text',
    fontSize: '17rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150% /* 25.5rem */',
    letterSpacing: '-0.41rem',
  },
});
