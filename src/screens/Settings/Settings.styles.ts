import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';

import { lightTheme } from './../../config/theme';

export const useSettingsStyles = (theme: Theme) => StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1
  },
  infoItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoLabel: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 16,
    color: theme.colors.text
  },
  iconButtons: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export const useSectionLabelStyles = (theme: Theme) => StyleSheet.create({
  sectionLabel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16
  },
  sectionDivider: {
    height: 0.5,
    backgroundColor: lightTheme.colors.border,
    flex: 1
  },
  sectionText: {
    fontFamily: 'OpenSans-Medium',
    color: theme.colors.text,
    paddingLeft: 16,
    paddingRight: 16,
  },
})