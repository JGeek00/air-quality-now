import { Theme } from '@react-navigation/native';
import { StyleSheet } from "react-native";

export const useLocationScreen = (theme: Theme) => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  body: {
    flex: 1
  },
  sectionTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: theme.colors.text,
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
    color: theme.colors.text,
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
    color: theme.colors.text,
    fontSize: 16
  },
  measurementValue: {
    textAlign: 'center'
  },
  measurementValueLabel: {
    textAlign: 'center',
    color: theme.colors.text,
    fontFamily: 'OpenSans-Medium'
  },
  mapContainer: {
    height: 200,
    overflow: 'hidden',
    borderRadius: 20,
    margin: 16,
    marginBottom: 0
  }
});

export const useLocationHeader = (theme: Theme) => StyleSheet.create({
  header: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    backgroundColor: theme.colors.background
  },
  backButton: {
    marginLeft: 5
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    marginLeft: 8,
    paddingBottom: 2,
    color: theme.colors.text,
  },
});