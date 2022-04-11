import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { SIZES, assets, SHADOWS } from "../../constants";
import { CircularButton, RectButton } from "../../components/common/Buttons";
import { FocusStatusBar } from "../../components/common";
import { SubInfo } from "../../components/Home/NFTCard/SubInfo";
import { Desc, Bids } from "../../components/Details";
import styles from "./styles";

const DetailsHeader = ({ data, navigation }) => (
  <View style={styles.detailsHeaderWrapper}>
    <Image source={data.image} resizeMode="cover" style={styles.nftImage} />

    <CircularButton
      imageUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircularButton
      imageUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.placeBidWrapper}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <Bids bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bidsContainer}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={styles.listHeaderWrapper}>
              <Desc data={data} />

              {data.bids.length > 0 && (
                <Text style={styles.currentBidTxt}>Current Bid</Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
