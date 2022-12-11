import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import type { StackScreenProps } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";

import LocationItem from "../../components/ResultItems/Location/Location";
import { getCityLocations } from "../../services/apiRequests";
import { Location } from "../../models/LocationQuery";
import { useScreenStyles } from './CityLocations.styles';
import { RootStackParamList } from "../../router/Home.Router";
import CustomButton from "../../components/Button/CustomButton";
import { lightTheme } from "../../config/theme";
import { useTheme } from "@react-navigation/native";

type Props = StackScreenProps<RootStackParamList, 'CityLocationsScreen'>;

const limit: number = 100;

const CityLocationsScreen = ({ route }: Props) => {
  const [locations, setLocations] = useState<Array<Location>>([]);
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [needsPagination, setNeedsPagination] = useState<boolean>(false);

  const [fetchingMore, setFetchingMore] = useState<boolean>(false);

  const theme = useTheme();
  const styles = useScreenStyles(theme);

  const fetchLocations = async (page: number | undefined = 1) => {
    if (page > 1) {
      setFetchingMore(true);
    }

    const result = await getCityLocations(route.params?.city, page, limit);
    setLoading(false);
    setFetchingMore(false);
    if (result) {
      setPage(result.meta.page);
      setNeedsPagination((page === 1 && result.meta.found > result.meta.limit) || page > 1 && page < result.meta.found/result.meta.limit);
      setLocations([...locations, ...result.results]);
    }
    else {
      setError(true);
    }
  }

  useEffect(() => {
    if (locations.length === 0) {
      fetchLocations();
    }
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        {
          loading ? (
            <View style={styles.loading}>
              <ActivityIndicator size={60} />
            </View>
          ) : (
            error ? (
              <View style={styles.error}>
                <Icon name="exclamation-circle" size={60} />
                <Text style={styles.message}>Couldn't load data</Text>
                <CustomButton text="Retry" onPress={fetchLocations} textColor={theme.colors.primary} />
              </View>
            ) : (
              <FlatList
                style={styles.list}
                data={locations}
                renderItem={({ item }) => <LocationItem locationItem={item} />}
                keyExtractor={(item) => item ? item?.id.toString() : 'loader'}
                onEndReached={needsPagination ? () => fetchLocations(page+1) : null}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                  fetchingMore ? (
                    <View style={styles.loadingTile}>
                      <ActivityIndicator size={30} />
                    </View>
                  ) : null
                }
              />
            )
          )
        }
      </View>
    </View>
  );
}
 
export default CityLocationsScreen;