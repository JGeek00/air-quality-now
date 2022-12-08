import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size={60} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center'
  }
})
 
export default LoadingScreen;