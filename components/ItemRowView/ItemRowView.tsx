import {View, Text} from 'react-native';
import { Image } from 'expo-image'
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {ButtonSecondary} from '../../components/ButtonSecondary';
import media from '../../assets/images/media.png';
import theme from '../../theme';

export function ItemRowView() {
  return (
    <View style={styles.root}>
      <View style={styles.container}/>
      <Image source={{uri: media}} style={{width: 177, height: 128}} contentFit="cover"/>
      <Text style={styles.purpleCauliflower}>
        Purple cauliflower

      </Text>
      <View style={styles.price}>
        <Text style={styles.$145}>
          1.45
        </Text>
        <Text style={styles._Kg}>
          € / kg
        </Text>
      </View>
      <ButtonSecondary/>
      <ButtonSecondary/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '414rem',
    height: '160rem',
  },
  container: {
    width: '414rem',
    height: '160rem',
    flexShrink: 0,
  },
  media: {
    width: '177rem',
    height: '128rem',
    flexShrink: 0,
    borderRadius: '8rem',
  },
  purpleCauliflower: {
    width: '177rem',
    height: '24rem',
    flexShrink: 0,
    color: theme.colors.textPrimary,
    fontFamily: 'SF Pro Text',
    fontSize: '18rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '22rem /* 122.222% */',
    letterSpacing: '-0.41rem',
  },
  $145: {
    color: theme.colors.textPrimary,
    fontFamily: 'SF Pro Text',
    fontSize: '22rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '22rem /* 100% */',
    letterSpacing: '-0.41rem',
  },
  _Kg: {
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: '16rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22rem /* 137.5% */',
    letterSpacing: '-0.41rem',
  },
  price: {
    display: 'inline-flex',
    alignItems: 'flex-end',
    gap: '2rem',
    flexDirection: 'row',
  },
});
