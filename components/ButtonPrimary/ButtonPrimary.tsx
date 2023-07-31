import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import theme from '../../theme';
import React from 'react';

export function ButtonPrimary() {
  return (
    <View style={styles.root}>
      <Text style={styles.action}>
        action
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '158.57rem',
    height: '56rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryButton,
    flexDirection: 'row',
    paddingVertical: '16rem',
    paddingHorizontal: '24rem',
    borderRadius: '8rem',
  },
  action: {
    width: '110.57rem',
    height: '24rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18rem /* 120% */',
    letterSpacing: '-0.01rem',
    textTransform: 'uppercase',
  },
});
