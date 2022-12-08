import { RouteProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LocationItem from "../../components/ResultItems/Location/Location";
import { Location } from "../../models/LocationQuery";
import { getCityLocations } from "../../services/apiRequests";
import type { StackScreenProps } from '@react-navigation/stack';

import { screenStyles as styles } from './CityLocations.styles';
import { RootStackParamList } from "../../router/Home.Router";

type Props = StackScreenProps<RootStackParamList, 'CityLocationsScreen'>;

const CityLocationsScreen = ({ route }: Props) => {
  const [locations, setLocations] = useState<Array<Location>>([]);
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { goBack } = useNavigation();

  const fetchLocations = async () => {
    const result = await getCityLocations(route.params?.city, page);
    setLoading(false);
    if (result) {
      setLocations(result.results);
    }
    else {
      setError(true);
    }
  }

  useEffect(() => {
    fetchLocations();
  }, [page]);

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        {
          loading ? (
            <View style={styles.loading}>
              <ActivityIndicator size={60} />
            </View>
          ) : (
            <FlatList
              style={styles.list}
              data={locations}
              renderItem={({ item }) => <LocationItem 
                locationItem={item}
              />}
              keyExtractor={(item) => item.id.toString()}
            />
          )
        }
      </View>
    </View>
  );
}
 
export default CityLocationsScreen;