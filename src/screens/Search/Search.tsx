import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomText from "../../components/CustomText/CustomText";
import IconButton from "../../components/IconButton/IconButton";
import CityResult from "../../components/ResultItems/City/City";
import { CitiesContext } from "../../context/CitiesContext";
import { City } from "../../models/CityQuery";
import { searchStyles as styles } from './Search.styles';

const SearchScreen = () => {
  const [citiesDisplay, setCitiesDisplay] = useState<Array<City>>([]);

  const { data: cities, searchValue, setSearchValue } = useContext(CitiesContext);

  const findCities = (value: string) => {
    setSearchValue(value);
    setCitiesDisplay(
      cities.filter(city => city.city.toLocaleLowerCase().includes(value))
    );
  }

  useEffect(() => {
    findCities(searchValue);
  }, [searchValue]);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
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
