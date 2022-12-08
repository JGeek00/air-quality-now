import { StyleSheet } from "react-native";

import { lightTheme } from './../../config/theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: lightTheme.backgroundColor
  },
  header: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8
  },
  backButton: {
    marginLeft: 5
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    marginLeft: 8,
    paddingBottom: 2,
    color: 'black'
  },
  body: {
    flex: 1
  },
  sectionTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    padding: 16
  },
  infoRow: {
    padding: 16,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabelBox: {
    maxWidth: '50%'
  },
  infoLabel: {
    fontFamily: 'OpenSans-Medium',
    color: 'black',
    fontSize: 16
  },
  infoSublabel: {
    fontSize: 12,
    marginTop: 5
  },
  measurementRow: {
    flexDirection: 'row',
    padding: 16
  },
  measurementBox: {
    flex: 1
  },
  measurementLabel: {
    fontFamily: 'OpenSans-Medium',
    color: 'black',
    fontSize: 16
  },
  measurementValue: {
    textAlign: 'center'
  },
  measurementValueLabel: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'OpenSans-Medium'
  }
});