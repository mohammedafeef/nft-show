import { View, Text, Image } from "react-native";
import styles from "./styles";
import { assets, SIZES } from "../../../constants";

export const NFTTitle = ({ title, subTitle }) => {
  return (
    <View style={styles.nftTitleWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{subTitle}</Text>
    </View>
  );
};
export const EthPrice = ({ price }) => {
  return (
    <View style={styles.ethPriceContainer}>
      <Image source={assets.eth} resize="contain" style={styles.ethIcon} />
      <Text style={styles.ethPrice}>{price}</Text>
    </View>
  );
};
const ImgCmp = ({ imageUrl, index }) => {
  return (
    <Image
      source={imageUrl}
      resize="contain"
      style={{ ...styles.peopleImg, marginLeft: index === 0 ? 0 : -SIZES.font }}
    />
  );
};
const EndDate = () => {
  return (
    <View style={styles.endDateWrapper}>
      <Text style={styles.endDateText}>Ends In</Text>
      <Text style={styles.endDate}>12h 10m</Text>
    </View>
  );
};
const People = () => {
  return (
    <View style={styles.peopleWrapper}>
      {[assets.person01, assets.person02, assets.person03, assets.person04].map(
        (imageUrl, index) => (
          <ImgCmp imageUrl={imageUrl} index={index} key={index}/>
        )
      )}
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View style={styles.subInfoWrapper}>
      <People />
      <EndDate />
    </View>
  );
};
