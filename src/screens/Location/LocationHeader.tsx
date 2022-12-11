import { useNavigation, useTheme } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import { View } from "react-native";

import CustomText from "../../components/CustomText/CustomText";
import IconButton from "../../components/IconButton/IconButton";
import { useLocationHeader } from "./Location.styles";

const LocationHeader = ({ route }: StackHeaderProps) => {
  const theme = useTheme();
  const styles = useLocationHeader(theme);

  const { goBack } = useNavigation();

  return (
    <View style={styles.header}>
      <IconButton 
        iconName="chevron-left" 
        iconColor={theme.colors.text}
        iconSize={16} 
        style={styles.backButton}
        onPress={() => goBack()}
      />
      <CustomText style={styles.headerTitle}>{route.params?.location.name}</CustomText>
    </View>
  );
}
 
export default LocationHeader;