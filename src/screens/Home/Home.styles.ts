import { Theme } from '@react-navigation/native';
import { StyleSheet } from "react-native";

import { darkRipple, lightRipple, subtextDarkTheme, subtextLightTheme } from './../../config/theme';

export const useHomeStyles = (theme: Theme) => StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1
  },
  top: {
    backgroundColor: theme.colors.background,
    padding: 16,
  },
  appName: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    textAlign: 'center',
    color: theme.colors.text
  },
});

export const useSearchButtonStyles = (theme: Theme) => StyleSheet.create({
  searchWrapper: {
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 16,
  },
  searchPressable: {
    borderRadius: 20,
    borderColor: theme.dark ? darkRipple : lightRipple,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    marginLeft: 5
  },
  searchText: {
    marginLeft: 10,
    color: theme.dark ? subtextDarkTheme : subtextLightTheme
  }
});