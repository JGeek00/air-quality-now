import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';

export const useScreenStyles = (theme: Theme) => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background
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

export const useHeaderStyles = (theme: Theme) => StyleSheet.create({
  header: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    backgroundColor: theme.colors.background
  },
  backButton: {
    marginLeft: 5,
    color: theme.colors.text,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    marginLeft: 8,
    paddingBottom: 2,
    color: theme.colors.text
  },
})