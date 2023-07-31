import {View, Text} from 'react-native';
import { Image } from 'expo-image'
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import imagem from '../../assets/images/imagem.png';
import theme from '../../theme';

export function LocalCard() {
  return (
    <View style={styles.root}>
      <View style={styles.background}/>
      <Text style={styles.local}>
        Local
      </Text>
      <Text style={styles.info3}>
        Ultima coisa
      </Text>
      <Text style={styles.info2}>
        Outra informação
      </Text>
      <Text style={styles.info1}>
        Endereço
      </Text>
      <Image source={{uri: imagem}} style={{width: 135, height: 90}} contentFit="cover"/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '374rem',
    height: '90rem',
  },
  background: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info3: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info2: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info1: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
});
