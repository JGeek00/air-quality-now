import { lightTheme } from '../../config/theme';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: lightTheme.backgroundColor,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '600',
    color: 'black',
    textAlign: 'center'
  }
});