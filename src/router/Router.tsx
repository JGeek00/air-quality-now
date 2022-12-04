import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomNavigationBar from '../components/NavigationBar/NavigationBar';
import { tabs } from '../config/screens';

const BottomTabs = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
        tabBar={(props) => <CustomNavigationBar {...props} />}
      >
        {
          tabs.map(item => (
            <BottomTabs.Screen 
              key={item.id}
              name={item.id}
              component={item.component}
              options={{
                title: item.name
              }}
            />
          ))
        }
      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}
 
export default Router;