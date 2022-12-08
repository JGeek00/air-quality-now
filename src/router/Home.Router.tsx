import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import CustomAppBar from '../components/AppBar/AppBar';
import SearchScreen from '../screens/Search/Search';
import LocationScreen from '../screens/Location/Location';
import CityLocationsScreen from '../screens/CityLocations/CityLocations';
import SearchHeader from '../screens/Search/SearchHeader';
import CityLocationsHeader from '../screens/CityLocations/CityLocationsHeader';
import { Location } from '../models/LocationQuery';
import LocationHeader from '../screens/Location/LocationHeader';

export type RootStackParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  CityLocationsScreen: { city: string };
  LocationScreen: { location: Location };
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
        header: (_) => <SearchHeader />
      }} />
      <Stack.Screen name='CityLocationsScreen' component={CityLocationsScreen} options={{
        header: (props) => <CityLocationsHeader {...props} />
      }} />
      <Stack.Screen name='LocationScreen' component={LocationScreen} options={{
        header: (props) => <LocationHeader {...props} />
      }} />
    </Stack.Navigator>
  )
}

export default HomeRouter;