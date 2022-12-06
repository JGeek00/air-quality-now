import { StyleSheet, Text } from "react-native";

interface CustomTextProps {
  style?: Object
  children?: string
}

const CustomText: React.FC<CustomTextProps> = ({style, children}) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular'
  }
});
 
export default CustomText;