import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {IconSearch} from '../../components/IconSearch';
import theme from '../../theme';

export function Search() {
  return (
    <View style={styles.root}>
      <View style={styles.searchfield}/>
      <Text style={styles._Text}>
        Search
      </Text>
      <IconSearch/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '374rem',
    height: '48rem',
  },
  searchfield: {
    width: '374rem',
    height: '48rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '27rem',
  },
  _Text: {
    width: '290rem',
    height: '24rem',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'SF Pro Text',
    fontSize: '17rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22rem /* 129.412% */',
    letterSpacing: '-0.41rem',
  },
});
