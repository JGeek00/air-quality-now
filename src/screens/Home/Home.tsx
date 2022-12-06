import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { ModalContext } from "../../context/ModalContext";
import { LoadingLayerContext } from "../../context/LoadingLayerContext";
import {homeStyles as styles} from "./Home.styles";
import SearchButton from "./SearchButton";


const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <Text style={styles.appName}>Air Quality Now</Text>
        <SearchButton />
      </View>
    </View>
  );
}
 
export default HomeScreen;