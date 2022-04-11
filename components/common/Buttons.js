import { TouchableOpacity, Image,Text } from "react-native";
import styles from "./styles";

export const CircularButton = ({ imageUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.circularBtnWrapper, ...props }}
      onPress={handlePress}
    >
      <Image
        source={imageUrl}
        resizeMode="contain"
        style={styles.circularBtnIcon}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ imageUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.rectBtnWrapper, ...props }}
      onPress={handlePress}
    >
      <Text style={styles.rectBtnText}>Place a bid</Text>
    </TouchableOpacity>
  );
};
