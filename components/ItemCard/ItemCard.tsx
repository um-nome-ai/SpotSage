import {View, Text} from 'react-native';
import { Image } from 'expo-image'
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import media from '../../assets/images/media.png';
import theme from '../../theme';

export function ItemCard() {
  return (
    <View style={styles.root}>
      <View style={styles.card}/>
      <Text style={styles.vegetables}>
        Vegetables
      </Text>
      <Text style={styles.$43}>
        (43)
      </Text>
      <Image source={{uri: media}} style={{width: 177, height: 140}} contentFit="cover"/>
      <View style={styles.cardBorder}/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '177rem',
    height: '211rem',
    borderRadius: '8rem',
  },
  card: {
    width: '177rem',
    height: '211rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  vegetables: {
    width: '145rem',
    height: '20rem',
    flexShrink: 0,
    color: theme.colors.textPrimary,
    fontFamily: 'Roboto',
    fontSize: '18rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  $43: {
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '12rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  media: {
    width: '177rem',
    height: '140rem',
    flexShrink: 0,
    borderTopLeftRadius: '8rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '0rem',
    borderBottomLeftRadius: '0rem',
  },
  cardBorder: {
    width: '177rem',
    height: '211rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    borderRadius: '8rem',
  },
});
