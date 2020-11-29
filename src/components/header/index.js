import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import backArrow from '../../assets/images/backArrow/back.png';
import menuIcon from '../../assets/images/menu/menu.png';
import {colors} from '../../utils/colors';
import {dynamicSize, getFontSize} from '../../utils/dimension.style';
import {fonts} from '../../utils/font';

export default function Header({onPressBack, title, onPressMenu}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPressMenu}>
        <Image source={menuIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.jostSemiBold,
    fontSize: getFontSize(18),
    letterSpacing: dynamicSize(0.38),
    color: colors.caparol,
  },
});
