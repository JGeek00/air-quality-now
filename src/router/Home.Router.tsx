import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import CustomAppBar from '../components/AppBar/AppBar';
import SearchScreen from '../screens/Search/Search';
import LocationScreen from '../screens/Location/Location';

const Stack = createStackNavigator();

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
        headerShown: false
      }} />
      <Stack.Screen name='LocationScreen' component={LocationScreen} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  )
}

export default HomeRouter;