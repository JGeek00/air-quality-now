import { Theme, useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";

import { darkRipple, lightRipple } from "../../config/theme";
import CustomText from "../CustomText/CustomText";

interface CustomButtonProps {
  text: string,
  onPress: Function,
  textColor: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, textColor }) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.wrapper}>
      <Pressable 
        onPress={() => onPress()} 
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
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

const useStyles = (theme: Theme) => StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: 20,
  },
  pressable: {
    padding: 8, 
    borderRadius: 20
  },
  pressed: {
    backgroundColor: theme.dark ? darkRipple : lightRipple
  },
  text: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 14
  }
})
 
export default CustomButton;