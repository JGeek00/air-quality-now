import { Theme, useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { darkRipple, lightRipple, lightTheme } from "../../config/theme";
import CustomText from "../CustomText/CustomText";

interface Props {
  label: string,
  value: string | number,
  groupValue: string | number,
  onTap(value: string | number): void
}

const RadioListItem = ({ label, value, groupValue, onTap }: Props) => {
  const [pressing, setPressing] = useState<boolean>(false);

  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Pressable 
      style={[
        styles.infoItem, 
        pressing && Platform.OS !== 'android' ? {backgroundColor: theme.dark ? darkRipple : lightRipple} : null
      ]} 
      onPress={() => onTap(value)} 
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(true)}
      android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
    >
      <CustomText style={styles.infoLabel}>{label}</CustomText>
      <Icon 
        name={value === groupValue ? "radiobox-marked" : "radiobox-blank" } 
        size={20} 
        color={value === groupValue ? lightTheme.colors.primary : theme.colors.text}
      />
    </Pressable>
  );
}

const useStyles = (theme: Theme) => StyleSheet.create({
  infoItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoLabel: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 16,
    color: theme.colors.text
  },
});
 
export default RadioListItem;