import React from 'react';
import {View, TextInput as RNTextInput, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {dynamicSize, getFontSize} from '../../utils/dimension.style';
import {fonts} from '../../utils/font';

export default function TextInput({onChangeText, placeholder, value}) {
  return (
    <View>
      <RNTextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.container}
        placeholder={placeholder}
        placeholderTextColor={colors.lusterBlue}
        selectionColor={colors.greenSponge}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bugle,
    fontFamily: fonts.jostRegular,
    fontSize: getFontSize(16),
    letterSpacing: dynamicSize(0.4),
    color: colors.caparol,
    paddingHorizontal: dynamicSize(22),
    paddingVertical: dynamicSize(21),
  },
});
