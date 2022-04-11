import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeBidWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 1,
  },
  bidsContainer: {
    paddingBottom: SIZES.extraLarge * 3,
  },
  listHeaderWrapper: { padding: SIZES.font },
  currentBidTxt: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  detailsHeaderWrapper: { width: "100%", height: 373 },
  nftImage: { width: "100%", height: "100%" },
});

export default styles;
