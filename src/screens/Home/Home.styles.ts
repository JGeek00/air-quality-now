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

export const noCityFoundModalStyles = StyleSheet.create({
  wrapper: {
    width: '70%',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 20,
    color: 'black',
    marginBottom: 16
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginBottom: 16,
    textAlign: 'justify'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})