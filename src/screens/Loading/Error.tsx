import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import CustomButton from "../../components/Button/CustomButton";
import { lightTheme } from "../../config/theme";
import { CitiesContext } from "../../context/CitiesContext";

const LoadingError = () => {
  const { retry } = useContext(CitiesContext);

  return (
    <View style={styles.screen}>
      <Icon name="exclamation-circle" size={60} />
      <Text style={styles.message}>Couldn't establish a connection with the server</Text>
      <CustomButton text="Retry" onPress={retry} textColor={lightTheme.primaryColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontSize: 22,
    fontFamily: 'OpenSans-Medium',
    color: 'black',
    textAlign: 'center',
    padding: 30
  }
});
 
export default LoadingError;