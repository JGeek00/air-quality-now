import { createStackNavigator } from '@react-navigation/stack';

import CustomAppBar from '../components/AppBar/AppBar';
import SettingsScreen from '../screens/Settings/Settings';

const Stack = createStackNavigator();

const SettingsRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName='SettingsScreen'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />
      }}
    >
      <Stack.Screen name='SetingsScreen' component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default SettingsRouter;