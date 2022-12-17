import { useContext, useMemo } from "react";
import { ActivityIndicator, StyleSheet, useColorScheme, View } from "react-native";

import { darkTheme, lightTheme } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";


const LoadingScreen = () => {
  const scheme = useColorScheme();

  const { selectedTheme } = useContext(ThemeContext);

  const colors = useMemo(() => {
    if (selectedTheme === 0) {
      if (scheme === 'light') {
        return {
          background: lightTheme.colors.background,
          primary: lightTheme.colors.primary
        };
      }
      else {
        return {
          background: darkTheme.colors.background,
          primary: darkTheme.colors.primary
        };
      }
    }
    else if (selectedTheme === 1) {
      return {
        background: lightTheme.colors.background,
        primary: lightTheme.colors.primary
      };
    }
    else {
      return {
        background: lightTheme.colors.background,
        primary: lightTheme.colors.primary
      };
    }
  }, [selectedTheme, scheme]);

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <ActivityIndicator size={60} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  }
})
 
export default LoadingScreen;