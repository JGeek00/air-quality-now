import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { GestureResponderEvent, Platform, Pressable, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { darkRipple, lightRipple } from "../../config/theme";

interface IconButtonProps {
  iconName: string,
  iconSize: number,
  iconColor?: string,
  onPress(event: GestureResponderEvent): void,
  style?: object
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, iconSize, onPress, style, iconColor }) => {
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
          {width: iconSize+20, height: iconSize+20},
        ]}
        onPressIn={(e) => setPressing(true)}
        onPressOut={(e) => setPressing(false)}
      >
        <Icon name={iconName} size={iconSize} color={iconColor} />
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
 
export default IconButton;