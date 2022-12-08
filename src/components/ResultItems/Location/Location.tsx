import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMemo, useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { ParameterElement } from "../../../models/LocationQuery";
import styles from './Location.styles';
import ParamItem from "./ParamItem";

interface LocationItemProps {
  x: number,
  y: number,
  lastUpdate: Date,
  name: string,
  parameters: ParameterElement[]
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

const LocationItem: React.FC<LocationItemProps> = ({ x, y, lastUpdate, name, parameters }) => {
  const [pressed, setPressed] = useState<boolean>(false);

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
    const date = new Date(lastUpdate);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }, [lastUpdate])

  return (
    <View style={styles.wrapper}>
      <Pressable 
        style={[
          styles.container,
          pressed && Platform.OS !== 'android' ? {backgroundColor: '#ccc'} : null
        ]} 
        android_ripple={{color: '#ccc'}}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={() => navigate('LocationScreen', {})}
      >
        <Text style={styles.name}>{name}</Text>
        <View style={styles.latestUpdate}>
          <Text style={styles.latestUpdateLabel}>Latest update:</Text>
          <Text>{latestUpdateFormatted}</Text>
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