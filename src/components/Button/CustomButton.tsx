import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "../CustomText/CustomText";

interface CustomButtonProps {
  text: string,
  onPress: Function,
  textColor: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, textColor }) => {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <View style={styles.wrapper}>
      <Pressable 
        onPress={() => onPress()} 
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        android_ripple={{color: '#ccc'}}
        style={[
          styles.pressable,
          pressed && Platform.OS !== 'android' ? styles.pressed : null
        ]}
      >
        <CustomText style={[styles.text, {color: textColor}]}>{text}</CustomText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: 20,
  },
  pressable: {
    padding: 8, 
    borderRadius: 20
  },
  pressed: {
    backgroundColor: '#ccc'
  },
  text: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 14
  }
})
 
export default CustomButton;