import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils/colors';
import {dynamicSize, getFontSize} from '../../utils/dimension.style';
import {fonts} from '../../utils/font';
import passwordInvisibleIcon from '../../assets/images/passwordVisibleIcon/shape.png';

export default function PasswordInput({onChangeText, placeholder, value}) {
  return (
    <View>
      <RNTextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.container}
        placeholder={placeholder}
        placeholderTextColor={colors.lusterBlue}
        selectionColor={colors.greenSponge}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.icon}>
        <Image source={passwordInvisibleIcon} />
      </TouchableOpacity>
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
  icon: {
    position: 'absolute',
    right: dynamicSize(22),
    top: dynamicSize(26),
    width: dynamicSize(18),
    height: dynamicSize(14),
  },
});
