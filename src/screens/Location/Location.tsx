import { useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Camera, MapView, PointAnnotation } from "@rnmapbox/maps";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Linking, Platform, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomText from "../../components/CustomText/CustomText";
import { subtextDarkTheme, subtextLightTheme } from "../../config/theme";

import { RootStackParamList } from "../../router/Home.Router";
import { getAddressFromCoordinates } from "../../services/apiRequests";
import { useLocationScreen } from "./Location.styles";

type Props = StackScreenProps<RootStackParamList, 'LocationScreen'>;

const LocationScreen = ({ route }: Props) => {
  const [address, setAddress] = useState<string>('');
  const [loadingAddress, setLoadingAddress] = useState<boolean>(true);
  const [errorAddress, setErrorAddress] = useState<boolean>(false);

  const theme = useTheme();
  const styles = useLocationScreen(theme);

  const { t } = useTranslation();

  const location = route.params?.location;

  const latestUpdate: string = useMemo(() => {
    const date = new Date(location.lastUpdated);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }, [location.lastUpdated]);

  const fetchAddress = async () => {
    const result = await getAddressFromCoordinates(location.coordinates.latitude, location.coordinates.longitude);
    setLoadingAddress(false);
    if (result) {
      setAddress(result.address.road);
    }
    else {
      setErrorAddress(true);
    }
  }

  useEffect(() => {
    if (location.coordinates && location.coordinates.latitude && location.coordinates.longitude) {
      fetchAddress();
    }
  }, [location.coordinates]);

  const openMapLink = () => {
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    const url = Platform.select({
      ios: `${scheme}${location.coordinates.latitude},${location.coordinates.longitude}`,
      android: `${scheme}${location.coordinates.latitude},${location.coordinates.longitude}`
    });
    if (url) {
      Linking.openURL(url);
    }
  }

  const entities: {
    [index: string]: string;
  } = {
    'government': t('location.entities.government'),
    'community': t('location.entities.community'),
    'research': t('location.entities.research')
  }

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.body}>
        <CustomText style={styles.sectionTitle}>{t('location.information')}</CustomText>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>{t('location.locationId')}</CustomText>
          <CustomText>{location.id.toString()}</CustomText>
        </View>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>{t('location.name')}</CustomText>
          <CustomText>{location.name}</CustomText>
        </View>
        {
          location.coordinates && location.coordinates.latitude && location.coordinates.longitude ? (
            <View style={styles.infoRow}>
              <CustomText style={styles.infoLabel}>{t('location.address')}</CustomText>
              {
                loadingAddress ? (
                  <ActivityIndicator color={theme.colors.primary} />
                ) : (
                  errorAddress ? (
                    <Icon name="exclamation-circle" color="red" size={18} />
                  ) : (
                    <CustomText>{address ?? 'N/A'}</CustomText>
                  )
                )
              }
            </View>
          ) : null
        }
        {
          location.city && location.country ? (
            <View style={styles.infoRow}>
              <CustomText style={styles.infoLabel}>{t('location.cityCountry')}</CustomText>
              <CustomText>{`${location.city}, ${location.country}`}</CustomText>
            </View>
          ) : null
        }
        {
          location.city && !location.country ? (
            <View style={styles.infoRow}>
              <CustomText style={styles.infoLabel}>{t('location.city')}</CustomText>
              <CustomText>{`${location.city}`}</CustomText>
            </View>
          ) : null
        }
        {
          !location.city && location.country ? (
            <View style={styles.infoRow}>
              <CustomText style={styles.infoLabel}>{t('location.country')}</CustomText>
              <CustomText>{`${location.country}`}</CustomText>
            </View>
          ) : null
        }
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>{t('location.entity')}</CustomText>
          <CustomText>{entities[location.entity]}</CustomText>
        </View>
        <View style={styles.infoRow}>
          <View>
            <CustomText style={styles.infoLabel}>{t('location.isMobile')}</CustomText>
            <CustomText style={styles.infoSublabel}>{t('location.isMobileDescription')}</CustomText>
          </View>
          <Icon 
            name={location.isMobile ? "check" : "close"} 
            size={18} 
            color={theme.dark ? subtextDarkTheme : subtextLightTheme}
          />
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoLabelBox}>
            <CustomText style={styles.infoLabel}>{t('location.isAnalysis')}</CustomText>
            <CustomText style={styles.infoSublabel}>{t('location.isAnalysisDescription')}</CustomText>
          </View>
          <Icon 
            name={location.isAnalysis ? "check" : "close"} 
            size={18} 
            color={theme.dark ? subtextDarkTheme : subtextLightTheme}
          />
        </View>
        <View style={styles.infoRow}>
          <CustomText style={styles.infoLabel}>{t('location.latestData')}</CustomText>
          <CustomText>{latestUpdate}</CustomText>
        </View>
        <CustomText style={[styles.sectionTitle, {marginTop: 8}]}>{t('location.measurements')}</CustomText>
        <View style={styles.measurementRow}>
          <View style={styles.measurementBox} />
          <View style={styles.measurementBox}>
            <CustomText style={styles.measurementValueLabel}>{t('location.latestValue')}</CustomText>
          </View>
          <View style={styles.measurementBox}>
            <CustomText style={styles.measurementValueLabel}>{t('location.average')}</CustomText>
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
        {
          location.coordinates.latitude && location.coordinates.longitude ? (
            <Pressable 
              style={styles.mapContainer}
              onPress={openMapLink}
            >
              <MapView 
                style={{flex: 1}} 
                scaleBarEnabled={false}
                attributionEnabled={false}
                
              >
                <Camera
                  zoomLevel={13}
                  centerCoordinate={[location.coordinates.longitude, location.coordinates.latitude]}
                  animationDuration={0}
                />
                <PointAnnotation 
                  coordinate={[location.coordinates.longitude, location.coordinates.latitude]} 
                />
              </MapView>
            </Pressable>
          ) : null
        }
        <View style={{height: 16}} />
      </ScrollView>
    </View>
  );
}
 
export default LocationScreen;