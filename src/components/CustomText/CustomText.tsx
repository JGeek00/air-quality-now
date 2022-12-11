import { Theme, useTheme } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";

interface CustomTextProps {
  style?: Object
  children?: string
}

const CustomText: React.FC<CustomTextProps> = ({style, children}) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const useStyles = (theme: Theme) => StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    color: theme.dark ? 'rgb(148, 148, 148)' : 'rgb(117 117 117)'
  }
});
 
export default CustomText;