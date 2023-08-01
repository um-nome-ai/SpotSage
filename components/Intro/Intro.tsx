import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { Image } from 'expo-image'
import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import { NavigationBar } from '../../components/NavigationBar';
import imagem6 from '../../assets/images/imagem6.png';
import theme from '../../theme';

type shoppings = Array<{
  name: string,
  address: string,
  CSC: string,
  image: string
}>;

export function Intro(props: { fonts: Array<string>, shoppings: shoppings }) {
  return (
    <ScrollView style={[styles.root, styles.shadowProp_root]}>
      <NavigationBar /*barra de nav superior*/ />
      <View style={styles.search} />
      <View style={styles.recentes} /*recentes*/>
        <View style={styles.background}>
          <View style={styles.cards}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.recentes2}>
                Recentes
              </Text>
              {/* toggle + pros recentes */}
            </View>
            <TouchableHighlight onPress={() => { console.log("hi1") }}>
              <View style={styles.localCard6}>
                <View style={styles.rectangle466}>
                  <View style={{ flexDirection: 'column', zIndex: 3 }}>
                    <Text style={styles.local6}>
                      {props.shoppings[0].name}
                    </Text>
                    <Text style={styles.info36}>
                      {props.shoppings[0].address}
                    </Text>
                    <Text style={styles.info26}>
                      {props.shoppings[0].CSC}
                    </Text>
                  </View>
                  <Image source={props.shoppings[0].image} style={{ width: 132, height: 87, zIndex: 3 }} contentFit="cover" />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { console.log("hi2") }}>
              <View style={styles.localCard6}>
                <View style={styles.rectangle466}>
                  <View style={{ flexDirection: 'column', zIndex: 3 }}>
                    <Text style={styles.local6}>
                      {props.shoppings[1].name}
                    </Text>
                    <Text style={styles.info36}>
                      {props.shoppings[1].address}
                    </Text>
                    <Text style={styles.info26}>
                      {props.shoppings[1].CSC}
                    </Text>
                  </View>
                  <Image source={props.shoppings[1].image} style={{ width: 132, height: 87, zIndex: 3 }} contentFit="cover" />
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.locais} /*locais proximos*/>
        <View style={styles.search2} />
        <View style={styles.cards2}>
          <Text style={styles.locaisProximos}>
            Locais Próximos
          </Text>
          <View style={styles.localCard6}>
            <View style={styles.rectangle466}>
              <View style={{ flexDirection: 'column', zIndex: 3 }}>
                <Text style={styles.local6}>
                  Local
                </Text>
                <Text style={styles.info36}>
                  Ultima coisa
                </Text>
                <Text style={styles.info26}>
                  Outra informação
                </Text>
                <Text style={styles.info16}>
                  Endereço
                </Text>
              </View>
              <Image source={imagem6} style={{ width: 132, height: 87, zIndex: 3 }} contentFit="cover" />
            </View>
          </View>
          <View style={styles.localCard6}>
            <View style={styles.rectangle466}>
              <View style={{ flexDirection: 'column', zIndex: 3 }}>
                <Text style={styles.local6}>
                  Local
                </Text>
                <Text style={styles.info36}>
                  Ultima coisa
                </Text>
                <Text style={styles.info26}>
                  Outra informação
                </Text>
                <Text style={styles.info16}>
                  Endereço
                </Text>
              </View>
              <Image source={imagem6} style={{ width: 132, height: 87, zIndex: 3 }} contentFit="cover" />
            </View>
          </View>
          <View style={styles.localCard6}>
            <View style={styles.rectangle466}>
              <View style={{ flexDirection: 'column', zIndex: 3 }}>
                <Text style={styles.local6}>
                  Local
                </Text>
                <Text style={styles.info36}>
                  Ultima coisa
                </Text>
                <Text style={styles.info26}>
                  Outra informação
                </Text>
                <Text style={styles.info16}>
                  Endereço
                </Text>
              </View>
              <Image source={imagem6} style={{ width: 132, height: 87, zIndex: 3 }} contentFit="cover" />
            </View>
          </View>
          <View style={styles.localCard6}>
            <View style={styles.rectangle466}>
              <View style={{ flexDirection: 'column', zIndex: 3 }}>
                <Text style={styles.local6}>
                  Local
                </Text>
                <Text style={styles.info36}>
                  Ultima coisa
                </Text>
                <Text style={styles.info26}>
                  Outra informação
                </Text>
                <Text style={styles.info16}>
                  Endereço
                </Text>
              </View>
              <Image source={imagem6} style={{ width: 132, height: 87, zIndex: 3 }} contentFit="cover" />
            </View>
          </View>
          <View style={styles.localCard6}>
            <View style={styles.rectangle466}>
              <View style={{ flexDirection: 'column', zIndex: 3 }}>
                <Text style={styles.local6}>
                  Local
                </Text>
                <Text style={styles.info36}>
                  Ultima coisa
                </Text>
                <Text style={styles.info26}>
                  Outra informação
                </Text>
                <Text style={styles.info16}>
                  Endereço
                </Text>
              </View>
              <Image source={imagem6} style={{ width: 132, height: 87, zIndex: 3 }} contentFit="cover" />
            </View>
          </View>
        </View>
        <View style={styles.search3} />
      </View>
    </ScrollView>
  );
}

const styles = EStyleSheet.create({
  $scale: 0.06,
  root: {
    width: '414rem',
    height: '896rem',
    backgroundColor: theme.colors.background,
    zIndex: 0,
  },
  shadowProp_root: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  iconSearch: {
    width: '24rem',
    height: '24rem',
    flexShrink: 0,
    zIndex: 2,
  },
  search: {
    width: '374rem',
    height: '48rem',
    flexShrink: 0,
    zIndex: 1,
  },
  search2: {
    width: '374rem',
    height: '168rem',
    flexShrink: 0,
    zIndex: 1,
  },
  search3: {
    width: '374rem',
    height: '168rem',
    flexShrink: 0,
    zIndex: 1,
  },
  rectangle46: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: theme.colors.white,
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
  nevoa: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: 'rgba(246, 245, 245, 0.80)',
    borderRadius: '8rem',
  },
  locais: {
    width: '414rem',
    height: '600rem',
    flexShrink: 0,
  },
  localCard: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    filter: 'blur(0.75px)',
  },
  rectangle462: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: theme.colors.white,
    borderRadius: '8rem',
  },
  local2: {
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
    letterSpacing: '0.41rem',
  },
  info32: {
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
    letterSpacing: '0.41rem',
  },
  info22: {
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
    letterSpacing: '0.41rem',
  },
  info12: {
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
    letterSpacing: '0.41rem',
  },
  imagem2: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard2: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  rectangle463: {
    width: '373rem',
    height: '89rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local3: {
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
    letterSpacing: '0.41rem',
  },
  info33: {
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
    letterSpacing: '0.41rem',
  },
  info23: {
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
    letterSpacing: '0.41rem',
  },
  info13: {
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
    letterSpacing: '0.41rem',
  },
  imagem3: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard3: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  rectangle464: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: theme.colors.white,
    borderRadius: '8rem',
  },
  local4: {
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
    letterSpacing: '0.41rem',
  },
  info34: {
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
    letterSpacing: '0.41rem',
  },
  info24: {
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
    letterSpacing: '0.41rem',
  },
  info14: {
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
    letterSpacing: '0.41rem',
  },
  imagem4: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard4: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  rectangle465: {
    width: '373rem',
    height: '89rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local5: {
    width: '102rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0.41rem',
  },
  info35: {
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
    letterSpacing: '0.41rem',
  },
  info25: {
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
    letterSpacing: '0.41rem',
  },
  info15: {
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
    letterSpacing: '0.41rem',
  },
  imagem5: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard5: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  locaisProximos: {
    color: theme.colors.textPrimary,
    fontFamily: 'Lexend-Bold',
    fontSize: '40rem',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0.2rem',
  },
  background: {
    width: '394rem',
    height: '268rem',
    flexShrink: 0,
    backgroundColor: '#8C33FF',
    borderRadius: '12rem',
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle466: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    borderRadius: '8rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 2,
  },
  local6: {
    width: '155rem',
    height: '27rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto-Bold',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0.1rem',
    zIndex: 3,
  },
  info36: {
    width: '230rem',
    height: '22rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto-Regular',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.1rem',
    zIndex: 3,
  },
  info26: {
    width: '230rem',
    height: '22rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto-Regular',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.1rem',
    zIndex: 3,
  },
  info16: {
    width: '230rem',
    height: '22rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto-Regular',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.1rem',
    zIndex: 3,
  },
  imagem6: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  recentes: {
    width: '414rem',
    height: '305rem',
    flexShrink: 0,
    alignItems: "center",
  },
  cards: {
    width: '394rem',
    height: '200rem',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.6rem',
    flexShrink: 0,
    paddingVertical: '5rem',
    paddingHorizontal: '10rem',
    zIndex: 1,
  },
  cards2: {
    width: '394rem',
    height: '200rem',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.6rem',
    flexShrink: 0,
    paddingVertical: '5rem',
    paddingHorizontal: '10rem',
    zIndex: 1,
  },
  localCard6: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    zIndex: 2,
  },
  background2: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local7: {
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
    letterSpacing: '0.41rem',
  },
  info37: {
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
    letterSpacing: '0.41rem',
  },
  info27: {
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
    letterSpacing: '0.41rem',
  },
  info17: {
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
    letterSpacing: '0.41rem',
  },
  imagem7: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard7: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  recentes2: {
    color: '#FFF',
    fontFamily: 'Lexend-Bold',
    fontSize: '40rem',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0.2rem',
    zIndex: 3,
  },
});
