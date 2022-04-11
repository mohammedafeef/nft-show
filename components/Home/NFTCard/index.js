import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { CircularButton } from "../../common/Buttons";
import { assets, SIZES } from "../../../constants";
import { SubInfo, NFTTitle, EthPrice } from "./SubInfo";
import { RectButton } from "../../common/Buttons";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <CircularButton top={10} right={10} imageUrl={assets.heart} />
        <Image
          source={data.image}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <SubInfo data={data} />
        <View style={styles.titleWrapper}>
          <NFTTitle title={data.name} subTitle={data.creator} />
        </View>
        <View style={styles.ethPriceWrapper}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
