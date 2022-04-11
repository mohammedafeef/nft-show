import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  // nft card styles
  cardWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  cardContainer: {
    minHeight: 200,
    width: "100%",
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopRightRadius: SIZES.font,
    borderTopLeftRadius: SIZES.font,
  },

});

export default styles;
