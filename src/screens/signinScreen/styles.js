import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {dynamicSize} from '../../utils/dimension.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dynamicSize(30),
    backgroundColor: colors.white,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(59),
    marginBottom: dynamicSize(50),
  },
});
