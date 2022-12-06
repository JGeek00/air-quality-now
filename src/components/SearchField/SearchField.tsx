import React, { useState } from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconButton from "../IconButton/IconButton";

import styles from './SearchField.styles';

interface SearchFieldProps {
  value: string, 
  onChange(value: string): void
  onSubmit: Function,
  placeholder: string
}

const SearchField: React.FC<SearchFieldProps> = ({ value, onChange, onSubmit, placeholder }) => {
  const [searchFocusedFocused, setSearchFocused] = useState<boolean>(false);

  return (
    <View style={styles.searchBox}>
      <View 
        style={[styles.searchFieldContainer, searchFocusedFocused ? styles.searchFieldFocused : null]} 
      >
        <Icon name="search" size={16} />
        <TextInput 
          value={value}
          onChange={(e) => onChange(e.nativeEvent.text)}
          style={styles.searchField}
          onFocus={() => setSearchFocused(true)}  
          onBlur={() => setSearchFocused(false)}  
          placeholder={placeholder}
          keyboardType="web-search"
          returnKeyType="search"
          onSubmitEditing={(e) => onSubmit()}
        />
        {value ? (
          <IconButton 
            style={{marginRight: 5}} 
            iconName="remove" 
            iconSize={16} 
            onPress={(_) => {onChange('')}} 
          />
        ) : null}
      </View>
    </View>
  );
}
 
export default SearchField;