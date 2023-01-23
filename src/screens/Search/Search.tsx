import { useTheme } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, SafeAreaView, useWindowDimensions, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomText from "../../components/CustomText/CustomText";
import CityResult from "../../components/ResultItems/City/City";
import { subtextDarkTheme, subtextLightTheme } from "../../config/theme";
import { CitiesContext } from "../../context/CitiesContext";
import { City } from "../../models/CityQuery";
import { useSearchStyles } from "./Search.styles";

const SearchScreen = () => {
  const [citiesDisplay, setCitiesDisplay] = useState<Array<City>>([]);

  const { data: cities, searchValue, setSearchValue } = useContext(CitiesContext);

  const theme = useTheme();
  const styles = useSearchStyles(theme);
 
  const findCities = (value: string) => {
    setSearchValue(value);
    setCitiesDisplay(
      cities.filter(city => city.city.toLocaleLowerCase().includes(value.toLowerCase()))
    );
  }

  const { height } = useWindowDimensions();

  useEffect(() => {
    findCities(searchValue);
  }, [searchValue]);

  const { t } = useTranslation();

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
          <View style={[styles.inputSearch, height < 400 ? styles.inputSearchHorizontal : null]}>
            <Icon 
              name="search" 
              size={60} 
              color={theme.dark ? subtextDarkTheme : subtextLightTheme}
            />
            <CustomText style={[styles.inputSearchText, height < 400 ? {marginTop: 0, marginLeft: 40} : null]}>
              {t('search.body.inputCitySearch')}
            </CustomText>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
 
export default SearchScreen;
