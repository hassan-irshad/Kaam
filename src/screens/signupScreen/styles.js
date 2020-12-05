import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {dynamicSize, getFontSize} from '../../utils/dimension.style';
import {fonts} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  paddingHorizontal: {
    paddingHorizontal: dynamicSize(30),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(59),
    marginBottom: dynamicSize(50),
  },
  passwordInputContainer: {
    marginTop: dynamicSize(16),
  },
  signupButtonContainer: {
    marginTop: dynamicSize(16),
  },
  orBtn: {
    fontFamily: fonts.jostSemiBold,
    color: colors.mauve,
    fontSize: getFontSize(16),
    textAlign: 'center',
    marginVertical: dynamicSize(16),
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: dynamicSize(20),
  },
  doYouHave: {
    color: colors.mauve,
    fontSize: getFontSize(16),
    fontFamily: fonts.jostSemiBold,
  },
  signupBtn: {
    color: colors.orange,
    fontFamily: fonts.jostSemiBold,
    fontSize: getFontSize(16),
    textDecorationLine: 'underline',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
