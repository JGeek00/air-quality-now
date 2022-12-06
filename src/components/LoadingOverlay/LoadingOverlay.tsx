import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useRef } from "react";
import { ActivityIndicator, Animated, StyleSheet } from "react-native";
import { LoadingLayerContext } from "../../context/LoadingLayerContext";
import CustomText from "../CustomText/CustomText";

const LoadingOverlay = () => {
  const {loadingStatus, message} = useContext(LoadingLayerContext);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loadingStatus === true) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true, 
          delay: 0
        }).start()
      });
    }
    else if (loadingStatus === false) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true, 
          delay: 0
        }).start()
      });
    }
  }, [fadeAnim, loadingStatus]);

  return (
    <Animated.View 
      style={[
        styles.main,
        {opacity: fadeAnim}
      ]} 
      pointerEvents= {loadingStatus ? 'auto' : 'none'}
    >
      <ActivityIndicator color="white" size={50} />
      <CustomText style={styles.message}>{message}</CustomText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    left: 0, 
    zIndex: 100,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 24,
    marginTop: 40,
    color: 'white'
  }
});
 
export default LoadingOverlay;