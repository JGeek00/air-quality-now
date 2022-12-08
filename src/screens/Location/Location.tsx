import { StackScreenProps } from "@react-navigation/stack";
import { useMemo } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomText from "../../components/CustomText/CustomText";

import { RootStackParamList } from "../../router/Home.Router";

import { locationScreen as styles } from './Location.styles';

type Props = StackScreenProps<RootStackParamList, 'LocationScreen'>;

const LocationScreen = ({ route }: Props) => {

  const location = route.params?.location;

  const latestUpdate: string = useMemo(() => {
    const date = new Date(location.lastUpdated);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }, [location.lastUpdated]);

  return (
    <View style={styles.screen}>
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