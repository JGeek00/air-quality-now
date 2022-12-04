import { Text, View } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";

import styles from './Appbar.styles';
import CustomText from "../CustomText/CustomText";

const CustomAppBar: React.FC<StackHeaderProps> = ({route}) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{route.name}</CustomText>
    </View>
  );
}
 
export default CustomAppBar;