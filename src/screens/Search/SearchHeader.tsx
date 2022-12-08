import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

import IconButton from "../../components/IconButton/IconButton";
import { CitiesContext } from "../../context/CitiesContext";
import { headerStyles as styles } from './Search.styles';

const SearchHeader = () => {
  const [searchFocusedFocused, setSearchFocused] = useState<boolean>(false);

  const { canGoBack, goBack } = useNavigation();

  const { searchValue, setSearchValue } = useContext(CitiesContext);

  return (
    <View style={styles.searchBox}>
      {canGoBack() ? (
        <IconButton 
          style={styles.backButton} 
          iconName="chevron-left" 
          iconSize={16} 
          onPress={(e) => {goBack()}} 
          iconColor="black"
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
            placeholder="Search a city."
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
  );
}
 
export default SearchHeader;