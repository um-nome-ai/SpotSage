import {View, Text} from 'react-native';
import { Image } from 'expo-image'
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Fundo from '../../assets/vectors/Fundo.svg';
import rectangle50 from '../../assets/images/rectangle50.png';
import Ellipse15 from '../../assets/vectors/Ellipse15.svg';
import Ellipse16 from '../../assets/vectors/Ellipse16.svg';
import Ellipse17 from '../../assets/vectors/Ellipse17.svg';
import Ellipse18 from '../../assets/vectors/Ellipse18.svg';
import Ellipse19 from '../../assets/vectors/Ellipse19.svg';
import Ellipse20 from '../../assets/vectors/Ellipse20.svg';
import Ellipse21 from '../../assets/vectors/Ellipse21.svg';
import Ellipse22 from '../../assets/vectors/Ellipse22.svg';
import Ellipse23 from '../../assets/vectors/Ellipse23.svg';
import Ellipse24 from '../../assets/vectors/Ellipse24.svg';
import Ellipse25 from '../../assets/vectors/Ellipse25.svg';
import Ellipse26 from '../../assets/vectors/Ellipse26.svg';
import theme from '../../theme';

export function LocalEstacionamento() {
  return (
    <View style={styles.root}>
      <View style={styles.andares}>
        <Fundo/>
        <Image source={{uri: rectangle50}} style={{width: 341, height: 282}} contentFit="cover"/>
        <View style={styles.fundo2}/>
        <View style={styles.fundo3}/>
        <View style={styles.fundo4}/>
        <Text style={styles.$4}>
          4
        </Text>
        <Text style={styles.$1}>
          1
        </Text>
        <Text style={styles.$0}>
          0
        </Text>
        <Text style={styles.$1Andar}>
          1º Andar
        </Text>
        <Text style={styles.$2Andar}>
          2º Andar
        </Text>
        <Text style={styles.$3Andar}>
          3º Andar
        </Text>
        <Ellipse15/>
        <Ellipse16/>
        <Ellipse17/>
        <Ellipse18/>
        <Ellipse19/>
        <Ellipse20/>
        <Ellipse21/>
        <Ellipse22/>
        <Ellipse23/>
        <Ellipse24/>
        <Ellipse25/>
        <Ellipse26/>
        <View style={styles.rectangle51}/>
        <View style={styles.rectangle52}/>
        <View style={styles.rectangle53}/>
        <View style={styles.rectangle54}/>
      </View>
      <View style={styles.cabecalho}>
        <View style={styles.frame31}>
          <View style={styles.rectangle49}/>
          <Text style={styles.predio}>
            Prédio 3
          </Text>
          <Text style={styles.$2}>
            2
          </Text>
        </View>
        <View style={styles.frame30}>
          <View style={styles.rectangle492}/>
          <Text style={styles.predio2}>
            Prédio 2
          </Text>
          <Text style={styles.$02}>
            0
          </Text>
        </View>
        <View style={styles.rectangle493}/>
        <View style={styles.frame29}>
          <Text style={styles.$5}>
            5
          </Text>
          <Text style={styles.predio3}>
            Prédio 1
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '414rem',
    height: '896rem',
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background,
  },
  rectangle50: {
    width: '341rem',
    height: '282rem',
    flexShrink: 0,
    borderRadius: '8rem',
  },
  fundo2: {
    width: '374rem',
    height: '60rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  fundo3: {
    width: '374rem',
    height: '60rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '8rem',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  fundo4: {
    width: '374rem',
    height: '60rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  $4: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $1: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $0: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $1Andar: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $2Andar: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $3Andar: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  ellipse16: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  ellipse17: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  ellipse18: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#1BCE0B',
  },
  ellipse19: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  ellipse20: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#1BCE0B',
  },
  ellipse21: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  ellipse22: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  ellipse23: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  ellipse24: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#1BCE0B',
  },
  ellipse25: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  ellipse26: {
    width: '16rem',
    height: '16rem',
    flexShrink: 0,
    fill: '#CE0B0B',
  },
  rectangle51: {
    width: '56rem',
    height: '56rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
  },
  rectangle52: {
    width: '287rem',
    height: '23rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
  },
  rectangle53: {
    width: '53rem',
    height: '53rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
  },
  rectangle54: {
    width: '276rem',
    height: '17rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
  },
  andares: {
    width: '414rem',
    height: '701rem',
    flexShrink: 0,
  },
  rectangle49: {
    width: '118rem',
    height: '118rem',
    flexShrink: 0,
    backgroundColor: '#F8F482',
    borderRadius: '8rem',
  },
  predio: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  $2: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '64rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 64.063% */',
    letterSpacing: '0.41rem',
  },
  cabecalho: {
    width: '414rem',
    height: '187rem',
    flexShrink: 0,
  },
  frame31: {
    width: '118rem',
    height: '147rem',
    flexShrink: 0,
  },
  rectangle492: {
    width: '118rem',
    height: '118rem',
    flexShrink: 0,
    backgroundColor: '#F88282',
    borderRadius: '8rem',
  },
  predio2: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  $02: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '64rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 64.063% */',
    letterSpacing: '0.41rem',
  },
  frame30: {
    width: '118rem',
    height: '147rem',
    flexShrink: 0,
  },
  rectangle493: {
    width: '118rem',
    height: '139rem',
    flexShrink: 0,
    borderTopLeftRadius: '8rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '0rem',
    borderBottomLeftRadius: '0rem',
    backgroundColor: '#7519EB',
  },
  $5: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '64rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 64.063% */',
    letterSpacing: '0.41rem',
  },
  predio3: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  frame29: {
    display: 'inline-flex',
    paddingTop: '0rem',
    paddingRight: '19rem',
    paddingBottom: '26rem',
    paddingLeft: '20rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32rem',
  },
});
