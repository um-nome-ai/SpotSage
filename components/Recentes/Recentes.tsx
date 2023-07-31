import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {LocalCard} from '../../components/LocalCard';
import {IconPlus} from '../../components/IconPlus';
import theme from '../../theme';

export function Recentes() {
  return (
    <View style={styles.root}>
      <View style={styles.background}/>
      <LocalCard/>
      <LocalCard/>
      <Text style={styles.recentes}>
        Recentes
      </Text>
      <IconPlus/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '414rem',
    height: '305rem',
  },
  background: {
    width: '394rem',
    height: '268rem',
    flexShrink: 0,
    backgroundColor: '#8C33FF',
    borderRadius: '12rem',
  },
  recentes: {
    color: '#FFF',
    fontFamily: 'Lexend',
    fontSize: '40rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 102.5% */',
    letterSpacing: '0.41rem',
  },
});
