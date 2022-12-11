import { Theme, useTheme } from "@react-navigation/native";
import { useContext, useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { ModalContext } from "../../context/ModalContext";

const CustomModal = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { content, visible } = useContext(ModalContext);

  useEffect(() => {
    if (visible) {
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
    else if (visible === false) {
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
  }, [fadeAnim, visible]);

  return (
    <Animated.View
     style={[styles.baseLayer, {opacity: fadeAnim}]}
     pointerEvents= {visible ? 'auto' : 'none'}
    >
      {content}
    </Animated.View>
  );
}

const useStyles = (theme: Theme) => StyleSheet.create({
  baseLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  modalContainer: {
    width: '70%',
    padding: 16,
    borderRadius: 20,
    backgroundColor: theme.colors.background,
    height: 100
  }
});
 
export default CustomModal;