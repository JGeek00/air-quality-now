import { Theme } from '@react-navigation/native';
import { StyleSheet } from "react-native";

export const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center'
  }
});