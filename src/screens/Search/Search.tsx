import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomText from "../../components/CustomText/CustomText";
import IconButton from "../../components/IconButton/IconButton";
import CityResult from "../../components/ResultItems/City/City";
import { CitiesContext } from "../../context/CitiesContext";
import { City } from "../../models/CityQuery";
import styles from './Search.styles';

const SearchScreen = () => {
  const [searchFocusedFocused, setSearchFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const navigation = useNavigation();

  const { data: cities } = useContext(CitiesContext);

  const [citiesDisplay, setCitiesDisplay] = useState<Array<City>>([]);

  const findCities = (value: string) => {
    setSearchValue(value);
    setCitiesDisplay(
      cities.filter(city => city.city.toLocaleLowerCase().includes(value))
    );
  }
  
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
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
                onChange={(e) => findCities(e.nativeEvent.text)}
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
        {searchValue ? (
          <FlatList
            style={styles.list}
            data={citiesDisplay}
            renderItem={({ item} ) => (
              <CityResult 
                country={item.country}
                name={item.city}
                lastUpdated={item.lastUpdated}
                stations={item.locations}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.inputSearch}>
            <Icon name="search" size={60} />
            <CustomText style={styles.inputSearchText}>Input a city to search</CustomText>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
 
export default SearchScreen;
