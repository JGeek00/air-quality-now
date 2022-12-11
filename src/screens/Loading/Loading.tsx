import { useContext, useMemo } from "react";
import { ActivityIndicator, StyleSheet, useColorScheme, View } from "react-native";

import { darkTheme, lightTheme } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";


const LoadingScreen = () => {
  const scheme = useColorScheme();

  const { selectedTheme } = useContext(ThemeContext);

  const backgroundColor: string = useMemo(() => {
    if (selectedTheme === 0) {
      if (scheme === 'light') {
        return lightTheme.colors.background;
      }
      else {
        return darkTheme.colors.background;
      }
    }
    else if (selectedTheme === 1) {
      return lightTheme.colors.background;
    }
    else {
      return lightTheme.colors.background;
    }
  }, [selectedTheme, scheme]);

  return (
    <View style={[styles.root, { backgroundColor }]}>
      <ActivityIndicator size={60} />
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