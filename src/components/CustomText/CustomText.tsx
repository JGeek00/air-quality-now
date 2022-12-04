import { StyleSheet, Text } from "react-native";

interface CustomTextProps {
  children: string,
  style: Object
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