import { lightTheme } from '../../config/theme';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: lightTheme.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: lightTheme.divider.color,
    borderTopWidth: 0.5
  },
  wrapper: {
    overflow: 'hidden',
    flex: 1
  },
  tabItem: {
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 24,
    paddingRight: 24
  },
  icon: {
    padding: 5,
    borderRadius: 50,
    marginBottom: 5,
    color: lightTheme.navigationBar.inactive
  },
  tabText: {
    fontFamily: 'OpenSans-Medium',
    fontWeight: '500',
    color: lightTheme.navigationBar.inactive,
  }
});