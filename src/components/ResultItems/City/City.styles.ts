import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const useStyles = (theme: Theme) => StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainInfo: {
    flex: 1
  },
  cityName: {
    fontSize: 18,
    color: theme.colors.text,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    zIndex: 10
  },
  flagContainer: {
    justifyContent: 'center',
    flex: 1
  },
  verticalDivider: {
    marginRight: 10,
    marginLeft: 10,
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
    paddingLeft: 14,
    justifyContent: 'center',
    alignItems: 'center',
  }
});