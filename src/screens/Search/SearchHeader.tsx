import { useNavigation, useTheme } from "@react-navigation/native";
import { useContext, useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

import IconButton from "../../components/IconButton/IconButton";
import { subtextDarkTheme, subtextLightTheme } from "../../config/theme";
import { CitiesContext } from "../../context/CitiesContext";
import { useHeaderStyles } from './Search.styles';

const SearchHeader = () => {
  const [searchFocusedFocused, setSearchFocused] = useState<boolean>(false);

  const { canGoBack, goBack } = useNavigation();

  const { searchValue, setSearchValue } = useContext(CitiesContext);

  const theme = useTheme();
  const styles = useHeaderStyles(theme);

  return (
    <View style={styles.searchBox}>
      {canGoBack() ? (
        <IconButton 
          style={styles.backButton} 
          iconName="chevron-left" 
          iconSize={16} 
          onPress={(e) => {goBack()}} 
          iconColor={theme.colors.text}
        />
      ) : null}
      <View 
        style={[styles.searchFieldContainer, searchFocusedFocused ? styles.searchFieldFocused : null]} 
      >
        <View style={styles.mainItems}>
          <Icon 
            name="search" 
            size={16} 
            color={theme.dark ? subtextDarkTheme : subtextLightTheme}
          />
          <TextInput 
            value={searchValue}
            onChange={(e) => setSearchValue(e.nativeEvent.text)}
            style={styles.searchField}
            onFocus={() => setSearchFocused(true)}  
            onBlur={() => setSearchFocused(false)}  
            placeholder="Search a city."
            keyboardType="web-search"
            returnKeyType="search"
            placeholderTextColor={theme.dark ? subtextDarkTheme : subtextLightTheme}
          />
        </View>
        {searchValue ? (
          <IconButton 
            style={styles.removeIcon} 
            iconName="remove" 
            iconSize={16} 
            onPress={(_) => {setSearchValue('')}} 
            iconColor={theme.dark ? subtextDarkTheme : subtextLightTheme}
          />
        ) : null}
      </View>
    </View>
  );
}
 
export default SearchHeader;