import { createContext, ReactNode, useState } from "react";
import { PermissionsAndroid } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import { err } from "react-native-svg/lib/typescript/xml";

interface GeolocationStatusContextProps {
  status: number,
  requestLocationPermission: Function,
  currentPosition: Geolocation.GeoPosition | null | undefined,
  getCurrentPosition: Function
}

interface GeolocationStatusProps {
  children: ReactNode
}

export const GeolocationStatusContext = createContext<GeolocationStatusContextProps>({
  status: 0,
  requestLocationPermission: () => {},
  currentPosition: null,
  getCurrentPosition: () => {}
});

const GeolocationStatusContextProvider: React.FC<GeolocationStatusProps> = ({ children }) => {
  const [status, setStatus] = useState<number>(0);  // 0 = requesting, 1 = approved, 2 = denied
  const [currentPosition, setCurrentPosition] = useState<Geolocation.GeoPosition | null | undefined>(null);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === 'granted') {
        getCurrentPosition();
        setStatus(1);
      } 
      else {
        setStatus(2);
      }
    } catch (err) {
      setStatus(2);
    }
  };

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition(position);
      },
      (error) => {
        setCurrentPosition(undefined);
      },
      {
        enableHighAccuracy: true, 
        timeout: 15000, 
        maximumAge: 10000
      }
    );
  }

  return (
    <GeolocationStatusContext.Provider
      value={{ 
        status,
        currentPosition,
        requestLocationPermission,
        getCurrentPosition,
      }}
    >
      {children}
    </GeolocationStatusContext.Provider>
  );
}

export default GeolocationStatusContextProvider;

