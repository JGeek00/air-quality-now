import { subtextDarkTheme, subtextLightTheme } from './../../../config/theme';
import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const useStyles = (theme: Theme) => StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  container: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: theme.colors.text
  },
  parameters: {
    flexDirection: 'row',
    marginTop: 8
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