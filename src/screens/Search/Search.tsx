import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from "../../components/IconButton/IconButton";

import styles from './Search.styles';

const SearchScreen = () => {
  const [searchFocusedFocused, setSearchFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <View style={styles.searchBox}>
        {navigation.canGoBack() ? (
          <IconButton 
            style={styles.backButton} 
            iconName="chevron-left" 
            iconSize={16} 
            onPress={(e) => {navigation.goBack()}} 
          />
        ) : null}
        <View 
          style={[styles.searchFieldContainer, searchFocusedFocused ? styles.searchFieldFocused : null]} 
        >
          <View style={styles.mainItems}>
            <Icon name="search" size={16} />
            <TextInput 
              value={searchValue}
              onChange={(e) => setSearchValue(e.nativeEvent.text)}
              style={styles.searchField}
              onFocus={() => setSearchFocused(true)}  
              onBlur={() => setSearchFocused(false)}  
              placeholder="Search some stuff..."
              keyboardType="web-search"
              returnKeyType="search"
            />
          </View>
          {searchValue ? (
            <IconButton 
              style={{marginRight: 5}} 
              iconName="remove" 
              iconSize={16} 
              onPress={(_) => {setSearchValue('')}} 
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}
 
export default SearchScreen;