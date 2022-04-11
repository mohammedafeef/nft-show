import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { COLORS, SIZES, SHADOWS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  //   circular button style
  circularBtnWrapper: {
    width: 40,
    height: 40,
    position: "absolute",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },
  circularBtnIcon: {
    width: 24,
    height: 24,
  },

  //rectangular button style
  rectBtnWrapper: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small,
  },
  rectBtnText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.font,
    color: COLORS.white,
    textAlign: "center",
  },
});

export default styles;
