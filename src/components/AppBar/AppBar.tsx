import { Text, View } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";

import CustomText from "../CustomText/CustomText";
import { useTheme } from "@react-navigation/native";
import { useStyles } from "./Appbar.styles";

const CustomAppBar: React.FC<StackHeaderProps> = ({ options }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{options.title}</CustomText>
    </View>
  );
}
 
export default CustomAppBar;