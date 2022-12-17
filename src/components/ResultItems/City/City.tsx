import { useNavigation, useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

import { darkRipple, lightRipple, subtextDarkTheme, subtextLightTheme } from "../../../config/theme";
import countriesFlags from "../../../constants/countriesFlags";
import CustomText from "../../CustomText/CustomText";
import Divider, { Direction } from "../../Divider/Divider";
import { useStyles } from './City.styles';

interface CityResultProps {
  name: string,
  country: string,
  lastUpdated: Date,
  stations: number
}

type RootStackParamList = {
  CityLocationsScreen: { city: string };
};

const CityResult: React.FC<CityResultProps> = ({ name, country, lastUpdated, stations }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const date: string = useMemo(() => {
    const formattedDate = new Date(lastUpdated);
    return `${formattedDate.getDate()}/${formattedDate.getMonth()+1}/${formattedDate.getFullYear()}`;
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
        android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
        onPress={() => navigation.navigate('CityLocationsScreen', {
          city: name
        })}
      >
        <View style={styles.mainInfo}>
          <CustomText style={styles.cityName}>{name}</CustomText>
          <ScrollView style={styles.infoContainer} horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.flagContainer}><CustomText>{flag}</CustomText></View>
            <Divider type={Direction.vertical} style={styles.verticalDivider} />
            <CustomText style={[styles.pillText, styles.lastUpdated]}>{`Last updated: ${date}`}</CustomText>
            <Divider type={Direction.vertical} />
            <CustomText style={[styles.pillText, styles.stations]}>{`Stations: ${stations}`}</CustomText>
          </ScrollView>
        </View>
        <View style={styles.arrowContainer}>
          <Icon 
            name="chevron-right"
            color={theme.dark ? subtextDarkTheme : subtextLightTheme}
          />
        </View>
      </Pressable>
    </View>
  );
}
 
export default CityResult;