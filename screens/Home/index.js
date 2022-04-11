import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../../constants";

import { HomeHeader, NFTCard } from "../../components/Home";
import { FocusStatusBar } from "../../components/common";

import styles from "./styles";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* status bar (the which shows battery time) */}
      <FocusStatusBar background={COLORS.primary} />
      {/* main content */}
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
      {/* background style for the screen */}
      <View style={styles.bgWrapper}>
        <View style={styles.bgHeader} />
        <View style={styles.bgRest} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
