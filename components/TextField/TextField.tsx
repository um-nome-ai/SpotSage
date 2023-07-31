import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import theme from '../../theme';

export function TextField() {
  return (
    <View style={styles.root}>
      <View style={styles.container}/>
      <View style={styles.text2}>
        <Text style={styles.text}>
          Text
        </Text>
      </View>
      <View style={styles.hint}>
        <Text style={styles.label}>
          Label
        </Text>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '374rem',
    height: '70rem',
  },
  container: {
    width: '374rem',
    height: '48rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: 'SF Pro Text',
    fontSize: '17rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22rem /* 129.412% */',
    letterSpacing: '-0.41rem',
  },
  text2: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10rem',
    flexDirection: 'row',
  },
  label: {
    color: theme.colors.textSecondary,
    fontFamily: 'SF Pro Text',
    fontSize: '14rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22rem /* 157.143% */',
    letterSpacing: '-0.41rem',
  },
  hint: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10rem',
    flexDirection: 'row',
  },
});
