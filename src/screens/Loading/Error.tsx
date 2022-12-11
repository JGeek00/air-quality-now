import { useContext, useMemo } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import CustomButton from "../../components/Button/CustomButton";
import { darkTheme, lightTheme } from "../../config/theme";
import { CitiesContext } from "../../context/CitiesContext";
import { ThemeContext } from "../../context/ThemeContext";

interface ErrorTheme {
  text: string
  background: string
}

const LoadingError = () => {
  const { retry } = useContext(CitiesContext);

  const scheme = useColorScheme();

  const { selectedTheme } = useContext(ThemeContext);

  const theme: ErrorTheme = useMemo(() => {
    if (selectedTheme === 0) {
      if (scheme === 'light') {
        return {
          background: lightTheme.colors.background,
          text: lightTheme.colors.text
        }
      }
      else {
        return {
          background: darkTheme.colors.background,
          text: darkTheme.colors.text
        }
      }
    }
    else if (selectedTheme === 1) {
      return {
        background: lightTheme.colors.background,
        text: lightTheme.colors.text
      }
    }
    else {
      return {
        background: darkTheme.colors.background,
        text: darkTheme.colors.text
      }
    }
  }, [selectedTheme, scheme]);

  return (
    <View style={[styles.screen, {backgroundColor: theme.background}]}>
      <Icon name="exclamation-circle" size={60} />
      <Text style={[styles.message, {color: theme.text}]}>Couldn't establish a connection with the server</Text>
      <CustomButton text="Retry" onPress={retry} textColor={lightTheme.colors.primary} />
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
    textAlign: 'center',
    padding: 30
  }
});
 
export default LoadingError;