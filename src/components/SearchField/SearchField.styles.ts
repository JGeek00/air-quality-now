import { lightTheme } from './../../config/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchBox: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomColor: lightTheme.divider.color,
    borderBottomWidth: 0.5,
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
  },
  mainItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchField: {
    paddingTop: 5,
    paddingLeft: 12,
    paddingBottom: 5,
    height: 40,
    flex: 1
  },
  searchFieldFocused: {
    borderColor: lightTheme.primaryColor,
    fontFamily: 'OpenSans-Regular'
  },
});