import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';
import {resizeFont} from './Metrics';

const fontsize = {
  fs8: resizeFont(8),
  fs9: resizeFont(9),
  fs10: resizeFont(10),
  fs12: resizeFont(12),
  fs14: resizeFont(14),
  fs16: resizeFont(16),
  fs18: resizeFont(18),
  fs20: resizeFont(20),
  fs24: resizeFont(24),
  fs32: resizeFont(32),
  fs40: resizeFont(40)
};

const fontType = StyleSheet.create({
  // PRIMARY
  fs10RegPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs10,
    color: Colors.primary
  },
  fs12RegPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs12,
    color: Colors.primary
  },

  // BLACK
  fs9RegBlack: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs9,
    color: Colors.black
  },
  fs10RegBlack: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs10,
    color: Colors.black
  },
  fs10MedBlack: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: fontsize.fs10,
    color: Colors.black
  },

  // GREY PRIMARY
  fs8RegGreyPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs8,
    color: Colors.greyPrimary
  },
  fs9RegGreyPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs9,
    color: Colors.greyPrimary
  },
  fs10RegGreyPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs10,
    color: Colors.greyPrimary
  },
  fs12RegGreyPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs12,
    color: Colors.greyPrimary
  },
  fs14RegGreyPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs14,
    color: Colors.greyPrimary
  },
  fs16RegGreyPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs16,
    color: Colors.greyPrimary
  },
  fs18RegGreyPrimary: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs18,
    color: Colors.greyPrimary
  },
  fs18SemiGreyPrimary: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: fontsize.fs18,
    color: Colors.greyPrimary
  },

  // WHITE
  fs10RegWhite: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs10,
    color: Colors.white
  },
  fs12RegWhite: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs12,
    color: Colors.white
  },
  fs14RegWhite: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs14,
    color: Colors.white
  },
  fs16RegWhite: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs16,
    color: Colors.white
  },
  fs32RegWhite: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: fontsize.fs32,
    color: Colors.white
  }
});

export {fontType, fontsize};
