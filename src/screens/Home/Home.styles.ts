import { Theme } from '@react-navigation/native';
import { StyleSheet } from "react-native";

import { darkRipple, lightRipple, subtextDarkTheme, subtextLightTheme } from './../../config/theme';

export const useHeaderStyles = (theme: Theme) => StyleSheet.create({
  top: {
    backgroundColor: theme.colors.background,
    padding: 16,
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: 120,
    top: -100
  },
  appName: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    textAlign: 'center',
    color: theme.colors.text
  },
});

export const useHomeStyles = (theme: Theme) => StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1,
    position: 'relative',
  },
  noLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 120,
  },
  noLocationText: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 18,
    padding: 40,
    textAlign: 'center'
  },
  nearbyStations: {
    flex: 1,
    paddingTop: 10,
  },
  nearbyStationsTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: theme.colors.text,
    paddingLeft: 16,
    textAlign: 'center',
    paddingBottom: 8,
    marginTop: 120
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120
  },
  list: {
    flex: 1,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120
  },
  message: {
    fontSize: 22,
    fontFamily: 'OpenSans-Medium',
    color: theme.colors.text,
    textAlign: 'center',
    padding: 30
  },
  loadingTile: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
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