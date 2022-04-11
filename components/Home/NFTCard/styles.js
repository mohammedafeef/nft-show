import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../../../constants";

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

  // sub info styles
  subInfoWrapper: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //people style
  peopleWrapper: {
    flexDirection: "row",
  },
  peopleImg: {
    height: 48,
    width: 48,
  },
  //end date style
  endDateWrapper: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    maxWidth: "50%",
    ...SHADOWS.light,
  },
  endDateText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  endDate: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },

  //title section
  titleWrapper: {
    width: "100%",
    padding: SIZES.font,
  },
  //nft title
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  subTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },

  //eth price
  ethPriceWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.font,
    paddingHorizontal: SIZES.base,
  },
  ethPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ethIcon: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  ethPrice: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.fonts,
    color: COLORS.primary,
  },
});

export default styles;
