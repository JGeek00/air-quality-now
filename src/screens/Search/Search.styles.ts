import { Theme } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { subtextDarkTheme, subtextLightTheme } from '../../config/theme';

export const useSearchStyles = (theme: Theme) => StyleSheet.create({
  mainContainer: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: theme.colors.background
  },
  list: {
    flex: 1
  },
  inputSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputSearchText: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 26,
    marginTop: 40
  }
});

export const useHeaderStyles = (theme: Theme) => StyleSheet.create({
  backButton: {
    marginLeft: 5,
    marginRight: 5
  },
  searchBox: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    backgroundColor: theme.colors.background
  },
  searchFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 16,
    marginRight: 10,
    position: 'relative',
  },
  mainItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchField: {
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 45,
    paddingBottom: 5,
    height: 40,
    flex: 1,
    color: theme.dark ? subtextDarkTheme : subtextLightTheme,
  },
  searchFieldFocused: {
    borderColor: theme.colors.primary,
    fontFamily: 'OpenSans-Regular'
  },
  removeIcon: {
    position: 'absolute',
    right: 5
  }
})
