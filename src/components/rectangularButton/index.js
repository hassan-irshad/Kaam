import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {dynamicSize, getFontSize} from '../../utils/dimension.style';
import {fonts} from '../../utils/font';

export default function RectangularButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greenSponge,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: getFontSize(16),
    letterSpacing: dynamicSize(0.4),
    fontFamily: fonts.jostSemiBold,
    paddingVertical: dynamicSize(21),
  },
});
