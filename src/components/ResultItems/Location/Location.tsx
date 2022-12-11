import { useNavigation, useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMemo, useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { darkRipple, lightRipple } from "../../../config/theme";
import { Location, ParameterElement } from "../../../models/LocationQuery";
import { useStyles } from './Location.styles';
import ParamItem from "./ParamItem";

interface LocationItemProps {
  locationItem: Location
}

export interface Parameters {
  co?: string,
  no2?: string,
  o3?: string,
  pm10?: string,
  pm25?: string,
  so2?: string
}

type RootStackParamList = {
  LocationScreen: {};
};

const LocationItem: React.FC<LocationItemProps> = ({ locationItem }) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const theme = useTheme();
  const styles = useStyles(theme);

  const { parameters, lastUpdated, name } = locationItem;

  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
 
  const paramsObj: Parameters = useMemo(() => {
    let obj = {};
    parameters.forEach(param => {
      obj = {
        ...obj,
        [param.parameter]: param.displayName
      };
    });
    return obj;
  }, [parameters]);

  const latestUpdateFormatted: string = useMemo(() => {
    const date = new Date(lastUpdated);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }, [lastUpdated])

  return (
    <View style={styles.wrapper}>
      <Pressable 
        style={[
          styles.container,
          pressed && Platform.OS !== 'android' ? {backgroundColor: theme.dark ? darkRipple : lightRipple} : null
        ]} 
        android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={() => navigate('LocationScreen', {
          location: locationItem
        })}
      >
        <Text style={styles.name}>{name}</Text>
        <View style={styles.latestUpdate}>
          <Text style={styles.latestUpdateLabel}>Latest update:</Text>
          <Text style={styles.latestUpdateValue}>{latestUpdateFormatted}</Text>
        </View>
        <ScrollView style={styles.parameters} horizontal={true} showsHorizontalScrollIndicator={false}>
          {paramsObj.co ? <ParamItem paramId="co" paramLabel={paramsObj.co} params={paramsObj} /> : null}
          {paramsObj.no2 ? <ParamItem paramId="no2" paramLabel={paramsObj.no2} params={paramsObj} /> : null}
          {paramsObj.o3 ? <ParamItem paramId="o3" paramLabel={paramsObj.o3} params={paramsObj} /> : null}
          {paramsObj.pm10 ? <ParamItem paramId="pm10" paramLabel={paramsObj.pm10} params={paramsObj} /> : null}
          {paramsObj.pm25 ? <ParamItem paramId="pm25" paramLabel={paramsObj.pm25} params={paramsObj} /> : null}
          {paramsObj.so2 ? <ParamItem paramId="so2" paramLabel={paramsObj.so2} params={paramsObj} /> : null}
        </ScrollView>
      </Pressable>
    </View>
  );
}

export default LocationItem;