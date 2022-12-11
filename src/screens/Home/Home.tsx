import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

import { useHomeStyles} from "./Home.styles";
import SearchButton from "./SearchButton";


const HomeScreen = () => {
  const theme = useTheme();
  const styles = useHomeStyles(theme);

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