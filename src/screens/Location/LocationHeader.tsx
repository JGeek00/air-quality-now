import { useNavigation } from "@react-navigation/native";
import { StackHeaderProps, StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";

import CustomText from "../../components/CustomText/CustomText";
import IconButton from "../../components/IconButton/IconButton";

import { locationHeader as styles } from './Location.styles';

const LocationHeader = ({ route }: StackHeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.header}>
      <IconButton 
        iconName="chevron-left" 
        iconColor="black" 
        iconSize={16} 
        style={styles.backButton}
        onPress={() => goBack()}
      />
      <CustomText style={styles.headerTitle}>{route.params?.location.name}</CustomText>
    </View>
  );
}
 
export default LocationHeader;