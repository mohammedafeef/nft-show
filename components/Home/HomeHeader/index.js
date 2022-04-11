import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { assets } from "../../../constants";

const HomeHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.logoWrapper}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={styles.brandLogo}
          key="brandLogo"
        />
        <View style={styles.profileWrapper}>
          <Image
            source={assets.person03}
            resizeMode="contain"
            style={styles.profileImg}
            key="profile"
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.verifyImg}
            key="badge"
          />
        </View>
      </View>
      <View style={styles.welcomeTxtWrapper}>
        <Text style={styles.welcomeTxt}>Hello, Maya Fernades 👋</Text>
        <Text style={styles.discribtionTxt}>Let's find a masterpeice</Text>
      </View>
      <View style={styles.searchWrapper}>
        <Image
          source={assets.search}
          resizeMode="contain"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search NFT's" style={styles.searchInput} />
      </View>
    </View>
  );
};

export default HomeHeader;
