import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
    width: "100%",
  },
  logoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandLogo: {
    width: 90,
    height: 25,
  },
  profileWrapper: {
    width: 45,
    height: 45,
  },
  profileImg: {
    width: "100%",
    height: "100%",
  },
  verifyImg: {
    width: 15,
    height: 15,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  welcomeTxtWrapper: {
    marginVertical: SIZES.font,
  },
  welcomeTxt: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
    marginTop: SIZES.base,
  },
  discribtionTxt: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchWrapper: {
    marginTop: SIZES.font,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.font,
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  searchInput: {
    flex: 1,
  },
});

export default styles;
