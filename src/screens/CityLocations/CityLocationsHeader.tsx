import { Text, View } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";
import { useNavigation, useTheme } from "@react-navigation/native";

import IconButton from "../../components/IconButton/IconButton";
import { useHeaderStyles } from './CityLocations.styles';

const CityLocationsHeader = ({ route }: StackHeaderProps) => {
  const theme = useTheme();
  const styles = useHeaderStyles(theme);

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
      <Text style={styles.headerTitle}>{route.params?.city}</Text>
    </View>
  );
}
 
export default CityLocationsHeader;