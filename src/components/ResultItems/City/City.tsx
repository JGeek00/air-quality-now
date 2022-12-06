import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import countriesFlags from "../../../constants/countriesFlags";

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

  const date: string = useMemo(() => {
    const formattedDate = new Date(lastUpdated);
    return `${formattedDate.getDate()}/${formattedDate.getMonth()+1}-${formattedDate.getFullYear()}`;
  }, [lastUpdated]);

  const flag: string = useMemo(() => {
    if (countriesFlags[country]) {
      return countriesFlags[country];
    }
    else {
      return "🏳️"
    }
  }, [country]);

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.container}
        android_ripple={{color: '#ccc'}}
      >
        <View>
          <CustomText style={styles.cityName}>{name}</CustomText>
          <View style={styles.infoContainer}>
            <CustomText>{flag}</CustomText>
            <Divider type={Direction.vertical} style={styles.verticalDivider} />
            <CustomText style={[styles.pillText, styles.lastUpdated]}>{`Last updated: ${date}`}</CustomText>
            <Divider type={Direction.vertical} />
            <CustomText style={[styles.pillText, styles.stations]}>{`Stations: ${stations}`}</CustomText>
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