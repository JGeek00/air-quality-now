import { lightTheme } from './../../../config/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderBottomColor: lightTheme.divider.color,
    borderBottomWidth: 0.5
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  verticalDivider: {
    marginRight: 10,
    marginLeft: 10
  },
  pillText: {
    borderRadius: 20,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
  },
  lastUpdated: {
    backgroundColor: '#FFB703',
    color: 'black'
  },
  stations: {
    backgroundColor: '#8ECAE6',
    color: 'black'
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});