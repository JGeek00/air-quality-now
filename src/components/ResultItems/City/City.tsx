import { Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomText from "../../CustomText/CustomText";
import Divider, { Direction } from "../../Divider/Divider";

import styles from './City.styles';

interface CityResultProps {
  name: string,
  country: string,
  lastUpdated: Date,
  stations: number
}

const CityResult: React.FC<CityResultProps> = ({ name, country, lastUpdated, stations }) => {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.container}
        android_ripple={{color: '#ccc'}}
      >
        <View>
          <CustomText style={styles.cityName}>Madrid</CustomText>
          <View style={styles.infoContainer}>
            <CustomText>🇪🇸</CustomText>
            <Divider type={Direction.vertical} style={styles.verticalDivider} />
            <CustomText style={[styles.pillText, styles.lastUpdated]}>Last updated: 2022-12-05</CustomText>
            <Divider type={Direction.vertical} />
            <CustomText style={[styles.pillText, styles.stations]}>Stations: 47</CustomText>
          </View>
        </View>
        <View style={styles.arrowContainer}>
          <Icon name="chevron-right" />
        </View>
      </Pressable>
    </View>
  );
}
 
export default CityResult;