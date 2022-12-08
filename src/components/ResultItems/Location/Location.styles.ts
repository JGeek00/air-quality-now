import { StyleSheet } from 'react-native';
import { lightTheme } from '../../../config/theme';

export default StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderBottomColor: lightTheme.divider.color,
    borderBottomWidth: 0.5
  },
  container: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: 'black'
  },
  parameters: {
    flexDirection: 'row',
    marginTop: 8
  },
  parameter: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 20,
    fontFamily: 'OpenSans-Medium'
  },
  latestUpdate: {
    flexDirection: 'row',
    marginTop: 8
  },
  latestUpdateLabel: {
    fontFamily: 'OpenSans-Bold',
    marginRight: 6
  }
});