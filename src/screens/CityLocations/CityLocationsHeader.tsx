import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IconButton from "../../components/IconButton/IconButton";
import { headerStyles as styles } from './CityLocations.styles';
import { StackHeaderProps, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../router/Home.Router";

const CityLocationsHeader = ({ route }: StackHeaderProps) => {

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
      <Text style={styles.headerTitle}>{route.params?.city}</Text>
    </View>
  );
}
 
export default CityLocationsHeader;