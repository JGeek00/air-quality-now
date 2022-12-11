import { lightTheme } from '../../config/theme';
import { StyleSheet } from 'react-native';

export const screenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: lightTheme.backgroundColor
  },
  body: {
    flex: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontSize: 22,
    fontFamily: 'OpenSans-Medium',
    color: 'black',
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

export const headerStyles = StyleSheet.create({
  header: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    backgroundColor: lightTheme.backgroundColor
  },
  backButton: {
    marginLeft: 5
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    marginLeft: 8,
    paddingBottom: 2,
    color: 'black',
  },
})