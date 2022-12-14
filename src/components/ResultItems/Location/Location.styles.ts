import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { subtextDarkTheme, subtextLightTheme } from './../../../config/theme';

export const useStyles = (theme: Theme) => StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  container: {
    padding: 16,
    flexDirection: 'row'
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: theme.colors.text
  },
  nameHome: {
    fontSize: 16,
    fontFamily: 'OpenSans-Medium',
    color: theme.colors.text
  },
  parameters: {
    flexDirection: 'row',
    marginTop: 8,
    zIndex: 5
  },
  latestUpdate: {
    flexDirection: 'row',
    marginTop: 8,
  },
  latestUpdateLabel: {
    fontFamily: 'OpenSans-Bold',
    marginRight: 6,
    color: theme.dark ? subtextDarkTheme : subtextLightTheme
  },
  latestUpdateValue: {
    color: theme.dark ? subtextDarkTheme : subtextLightTheme
  },
  arrowContainer: { 
    paddingLeft: 14,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const useParameterStyles = (theme: Theme) => StyleSheet.create({
  parameter: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 20,
    fontFamily: 'OpenSans-Medium'
  },
})