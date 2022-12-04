import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import CustomAppBar from '../components/AppBar/AppBar';

const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeRouter;