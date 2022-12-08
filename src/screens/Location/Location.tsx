import { RouteProp, useNavigation } from "@react-navigation/native";
import { useMemo } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomText from "../../components/CustomText/CustomText";
import IconButton from "../../components/IconButton/IconButton";
import { Location } from "../../models/LocationQuery";

import styles from './Location.styles';

interface LocationScreenProps {
  route: RouteProp<{ params: { location: Location } }, 'params'>
}

const LocationScreen: React.FC<LocationScreenProps> = ({ route }) => {

  const location = route.params.location;

  const { goBack } = useNavigation();

  const latestUpdate: string = useMemo(() => {
    const date = new Date(location.lastUpdated);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }, [location.lastUpdated]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <IconButton 
          iconName="chevron-left" 
          iconColor="black" 
          iconSize={16} 
          style={styles.backButton}
          onPress={() => goBack()}
        />
        <CustomText style={styles.headerTitle}>{location.name}</CustomText>
      </View>
      <ScrollView style={styles.body}>
        <CustomText style={styles.sectionTitle}>Information</CustomText>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>Location ID</CustomText>
          <CustomText>{location.id.toString()}</CustomText>
        </View>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>Name</CustomText>
          <CustomText>{location.name}</CustomText>
        </View>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>Address</CustomText>
          <CustomText>{location.name}</CustomText>
        </View>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>Entity</CustomText>
          <CustomText>{location.entity}</CustomText>
        </View>
        <View style={styles.infoRow}>
          <View>
            <CustomText style={styles.infoLabel}>Is mobile</CustomText>
            <CustomText style={styles.infoSublabel}>The location is not fixed.</CustomText>
          </View>
          <Icon name={location.isMobile ? "check" : "close"} size={18} />
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoLabelBox}>
            <CustomText style={styles.infoLabel}>Is analysis</CustomText>
            <CustomText style={styles.infoSublabel}>Data is the product of a previous analysis/aggregation and not raw measurements. </CustomText>
          </View>
          <Icon name={location.isAnalysis ? "check" : "close"} size={18} />
        </View>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>Latest data</CustomText>
          <CustomText>{latestUpdate}</CustomText>
        </View>
        <CustomText style={[styles.sectionTitle, {marginTop: 8}]}>Measurements</CustomText>
        <View style={styles.measurementRow}>
          <View style={styles.measurementBox} />
          <View style={styles.measurementBox}>
            <CustomText style={styles.measurementValueLabel}>Latest value</CustomText>
          </View>
          <View style={styles.measurementBox}>
            <CustomText style={styles.measurementValueLabel}>Average</CustomText>
          </View>
        </View>
        {location.parameters.map(item => (
          <View style={styles.measurementRow} key={item.id}>
            <View style={styles.measurementBox}>
              <CustomText style={styles.measurementLabel}>{item.displayName}</CustomText>
            </View>
            <View style={styles.measurementBox}>
              <CustomText style={styles.measurementValue}>{`${item.lastValue} ${item.unit}`}</CustomText>
            </View>
            <View style={styles.measurementBox}>
              <CustomText style={styles.measurementValue}>{`${item.average.toFixed(2)} ${item.unit}`}</CustomText>
            </View>
          </View>
        ))}
        <View style={{height: 16}} />
      </ScrollView>
    </View>
  );
}
 
export default LocationScreen;