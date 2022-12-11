import { useNavigation, useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { darkRipple, lightRipple, subtextDarkTheme, subtextLightTheme } from "../../config/theme";
import { useSearchButtonStyles } from "./Home.styles";

type RootStackParamList = {
  SearchScreen: {};
};

const SearchButton = () => {

  const theme = useTheme();
  const styles = useSearchButtonStyles(theme);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.searchWrapper}>
      <Pressable 
        style={styles.searchPressable}
        android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
        onPress={() => navigation.navigate('SearchScreen', {})}
      >
        <Icon 
          name="search" 
          size={16} 
          style={styles.searchIcon} 
          color={theme.dark ? subtextDarkTheme : subtextLightTheme} 
        />
        <Text style={styles.searchText}>Search a city</Text>
      </Pressable>
    </View>
  );
}
 
export default SearchButton;