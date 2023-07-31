import {View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {TabSelected} from '../../components/TabSelected';
import {Tab} from '../../components/Tab';
import Background from '../../assets/vectors/Background.svg';
import theme from '../../theme';

export function TabBar() {
  return (
    <View style={styles.root}>
      <Background/>
      <TabSelected/>
      <Tab/>
      <Tab/>
      <View style={styles.divider}/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '414rem',
    height: '80rem',
  },
  divider: {
    width: '414rem',
    height: '1rem',
    flexShrink: 0,
    backgroundColor: theme.colors.border,
  },
});
