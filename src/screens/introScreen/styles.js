import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils/colors';
import {getFontSize} from '../../utils/dimension.style';
import {fonts} from '../../utils/font';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderContainer: {
    height: '85%',
  },
  heading: {
    fontFamily: fonts.ubuntuMedium,
    fontSize: getFontSize(40),
    color: colors.caparol,
    textAlign: 'center',
  },
  slide: {
    width,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.ubuntuMedium,
    fontSize: getFontSize(16),
    color: colors.mauve,
    textAlign: 'center',
  },
});
