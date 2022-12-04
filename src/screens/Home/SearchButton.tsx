import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {searchButtonStyles as styles} from './Home.styles';

const SearchButton = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.searchWrapper}>
      <Pressable 
        style={styles.searchPressable}
        android_ripple={{color: '#ccc'}}
        onPress={() => navigation.navigate('SearchScreen')}
      >
        <Icon name="search" size={16} style={styles.searchIcon} />
        <Text style={styles.searchText}>Search some stuff...</Text>
      </Pressable>
    </View>
  );
}
 
export default SearchButton;