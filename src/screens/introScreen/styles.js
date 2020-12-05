import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils/colors';
import {dynamicSize, getFontSize} from '../../utils/dimension.style';
import {fonts} from '../../utils/font';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  sliderContainer: {
    marginTop: dynamicSize(30),
    height: '80%',
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
  slideIndicator: {
    width: dynamicSize(8),
    height: dynamicSize(8),
    backgroundColor: colors.grey,
    borderRadius: dynamicSize(60),
    marginRight: dynamicSize(10),
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: dynamicSize(47),
  },
  activeIndicator: {
    backgroundColor: colors.darkGrey,
    width: dynamicSize(17),
  },
  nextButton: {
    backgroundColor: colors.greenSponge,
    height: dynamicSize(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: dynamicSize(30),
    marginBottom: dynamicSize(10),
    // marginTop: dynamicSize(10),
  },
  nextButtonText: {
    fontFamily: fonts.jostSemiBold,
    color: colors.white,
    letterSpacing: dynamicSize(0.4),
    fontSize: getFontSize(16),
  },
});
