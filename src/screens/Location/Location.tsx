import { RouteProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import IconButton from "../../components/IconButton/IconButton";
import LocationItem from "../../components/ResultItems/Location/Location";
import { Location } from "../../models/LocationQuery";
import { getCityLocations } from "../../services/apiRequests";

import styles from './Location.styles';

interface LocationScreenProps {
  route: RouteProp<{ params: { city: string } }, 'params'>
}

const LocationScreen: React.FC<LocationScreenProps> = ({ route }) => {
  const [locations, setLocations] = useState<Array<Location>>([]);
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { goBack } = useNavigation();

  const fetchLocations = async () => {
    const result = await getCityLocations(route.params.city, page);
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
      <View style={styles.header}>
        <IconButton 
          iconName="chevron-left" 
          iconColor="black" 
          iconSize={16} 
          style={styles.backButton}
          onPress={() => goBack()}
        />
        <Text style={styles.headerTitle}>{route.params.city}</Text>
      </View>
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
                x={item.coordinates.latitude}
                y={item.coordinates.longitude}
                lastUpdate={item.lastUpdated}
                name={item.name}
                parameters={item.parameters}
              />}
              keyExtractor={(item) => item.id.toString()}
            />
          )
        }
      </View>
    </View>
  );
}
 
export default LocationScreen;