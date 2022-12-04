import { lightTheme } from '../../config/theme';
import { StyleSheet } from "react-native";

export const homeStyles =  StyleSheet.create({
  screen: {
    backgroundColor: lightTheme.backgroundColor,
    flex: 1
  },
  top: {
    backgroundColor: lightTheme.primaryColorLight,
    padding: 16,
  },
  appName: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    textAlign: 'center',
    color: 'black'
  },
});

export const searchButtonStyles = StyleSheet.create({
  searchWrapper: {
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 16,
  },
  searchPressable: {
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    marginLeft: 5
  },
  searchText: {
    marginLeft: 10
  }
});