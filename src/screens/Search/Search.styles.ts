import { StyleSheet } from "react-native";
import { lightTheme } from "../../config/theme";

export default StyleSheet.create({
  backButton: {
    marginLeft: 5,
    marginRight: 5
  },
  searchBox: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
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
  },
  mainItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchField: {
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 16,
    paddingBottom: 5,
    height: 40
  },
  searchFieldFocused: {
    borderColor: lightTheme.primaryColor,
    fontFamily: 'OpenSans-Regular'
  }
});