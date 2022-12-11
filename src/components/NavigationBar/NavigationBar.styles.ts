import { Theme } from '@react-navigation/native';
import { StyleSheet } from "react-native";

import { subtextDarkTheme, subtextLightTheme } from './../../config/theme';

export const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: theme.colors.border,
    borderTopWidth: 0.5
  },
  wrapper: {
    overflow: 'hidden',
    flex: 1
  },
  tabItem: {
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 24,
    paddingRight: 24
  },
  icon: {
    padding: 5,
    borderRadius: 50,
    marginBottom: 5,
  },
  tabText: {
    fontFamily: 'OpenSans-Medium',
    fontWeight: '500',
  }
});