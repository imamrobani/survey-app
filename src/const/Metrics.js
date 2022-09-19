import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from '../utils/Helper';

const {width, height} = Dimensions.get('window');

const spacings = {
  space0: 0,
  space4: 4,
  space8: 8,
  space12: 12,
  space16: 16,
  space20: 20,
  space24: 24,
  space32: 32,
  space36: 36,
  space40: 40,
  space44: 44,
  space48: 48,
  space54: 54,
  space58: 58,
  space62: 62
};

const radius = {
  round4: 4,
  round8: 8,
  round16: 16,
  round30: 30
};

const display = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  halfScreenHeight: height / 2,
  halfScreenWidth: width / 2
};

const resizeFont = (fontSize, standardScreenHeight = 720) => {
  const standardLength = width > height ? width : height;
  const statusBarHeight = StatusBar.currentHeight || 0;

  const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : statusBarHeight;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export {spacings, radius, display, resizeFont};
