import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 3,
  },
  content: {
    zIndex: 0,
  },
  bgWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  bgHeader: {
    height: 200,
    backgroundColor: COLORS.primary,
  },
  bgRest: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default styles;
