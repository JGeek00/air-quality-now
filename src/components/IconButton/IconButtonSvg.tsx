import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { GestureResponderEvent, Platform, Pressable, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { darkRipple, lightRipple } from "../../config/theme";

interface IconButtonProps {
  component: JSX.Element
  onPress(event: GestureResponderEvent): void,
  style?: object
}

const IconButtonSvg: React.FC<IconButtonProps> = ({ component, onPress, style }) => {
  const [pressing, setPressing] = useState<boolean>(false);

  const theme = useTheme();

  return (
    <View style={[
      styles.wrapper,
      Platform.OS !== "android" && pressing ? {backgroundColor: theme.dark ? darkRipple : lightRipple} : null,
      style
    ]}>
      <Pressable
        onPress={onPress} 
        android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
        style={[
          styles.pressable,
        ]}
        onPressIn={(e) => setPressing(true)}
        onPressOut={(e) => setPressing(false)}
      >
        {component}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  pressable: {
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
export default IconButtonSvg;