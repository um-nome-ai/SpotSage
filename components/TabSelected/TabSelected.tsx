import {View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {Tab} from '../../components/Tab';
import theme from '../../theme';

export function TabSelected() {
  return (
    <View style={styles.root}>
      <Tab/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '138rem',
    height: '80rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
