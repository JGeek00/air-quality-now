import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import CustomAppBar from '../components/AppBar/AppBar';
import SettingsScreen from '../screens/Settings/Settings';

const Stack = createStackNavigator();

const SettingsRouter = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName='SettingsScreen'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <Stack.Screen 
        name='SetingsScreen' 
        component={SettingsScreen}  
        options={{title: t('settings.header.settings')}}
      />
    </Stack.Navigator>
  )
}

export default SettingsRouter;