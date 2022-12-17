import { useTheme } from "@react-navigation/native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import Animated from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomButton from "../../components/Button/CustomButton";

import CustomText from "../../components/CustomText/CustomText";
import LocationItem from "../../components/ResultItems/Location/Location";
import { limitLocations } from "../../config/limitLocations";
import { GeolocationStatusContext } from "../../context/GeolocationStatus";
import { Location } from "../../models/LocationQuery";
import { getLocationsByCoordinates } from "../../services/apiRequests";
import { useHomeStyles } from "./Home.styles";
import HomeHeader from "./HomeHeader";

const HomeScreen = () => {
  const [locations, setLocations] = useState<Array<Location>>([]);
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [needsPagination, setNeedsPagination] = useState<boolean>(false);

  const [fetchingMore, setFetchingMore] = useState<boolean>(false);

  const theme = useTheme();
  const styles = useHomeStyles(theme);

  const { status, currentPosition } = useContext(GeolocationStatusContext);

  const scrolling = useRef(new Animated.Value(0)).current;

  const { height } = useWindowDimensions();

  const fetchLocations = async (page: number | undefined = 1) => {
    if (page > 1) {
      setFetchingMore(true);
    }

    const result = await getLocationsByCoordinates(currentPosition?.coords.latitude!, currentPosition?.coords.longitude!, page, limitLocations);
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
    if (status === 1 && currentPosition) {
      fetchLocations();
    }
  }, [status && currentPosition]);

  return (
    <View style={styles.screen}>
      <HomeHeader scrolling={scrolling} />
      <View style={{flex: 1}}>
      {status === 1 ? (
        currentPosition !== undefined ? (
          <View style={styles.nearbyStations}>
            {
              loading ? (
                <View style={styles.loading}>
                  <ActivityIndicator size={60} />
                </View>
              ) : (
                error ? (
                  <View style={styles.error}>
                    <Icon name="exclamation-circle" size={60} />
                    <CustomText style={styles.message}>Couldn't load data</CustomText>
                    <CustomButton text="Retry" onPress={fetchLocations} textColor={theme.colors.primary} />
                  </View>
                ) : (
                  <Animated.FlatList
                    style={styles.list}
                    data={locations}
                    renderItem={({ item }) => <LocationItem locationItem={item} home={true} />}
                    keyExtractor={(item) => item ? item?.id.toString() : 'loader'}
                    onEndReached={needsPagination ? () => fetchLocations(page+1) : null}
                    onEndReachedThreshold={0.5}
                    ListHeaderComponent={<CustomText style={styles.nearbyStationsTitle}>Nearby stations</CustomText>}
                    ListFooterComponent={
                      fetchingMore ? (
                        <View style={styles.loadingTile}>
                          <ActivityIndicator size={30} />
                        </View>
                      ) : null
                    }
                    onScroll={Animated.event(
                      [{
                        nativeEvent: {
                          contentOffset: {
                            y: scrolling,
                          },
                        },
                      }],
                      { useNativeDriver: true },
                    )}
                  />
                )
              )
            }
          </View>
        ) : (
          <View style={[styles.noLocation, height < 400 ? {flexDirection: 'row'} : null]}>
            <Icon name="location-off" size={70} />
            <CustomText style={styles.noLocationText}>Error when getting current location.</CustomText>
          </View>
        )
      ) : (
        <View style={[styles.noLocation, height < 400 ? {flexDirection: 'row'} : null]}>
          <Icon name="location-off" size={70} />
          <CustomText style={styles.noLocationText}>Allow location access to see nearby stations.</CustomText>
        </View>
      )}
      </View>
    </View>
  );
}
 
export default HomeScreen;