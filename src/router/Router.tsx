import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNBootSplash from 'react-native-bootsplash';

import CustomNavigationBar from '../components/NavigationBar/NavigationBar';
import { tabs } from '../config/screens';
import { darkTheme, lightTheme } from '../config/theme';
import { useColorScheme } from 'react-native';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BottomTabs = createBottomTabNavigator();

const Router = () => {
  const scheme = useColorScheme();

  const { selectedTheme } = useContext(ThemeContext);

  const theme: Theme = useMemo(() => {
    if (selectedTheme === 0) {
      if (scheme === 'light') {
        return lightTheme;
      }
      else if (scheme === 'dark')  {
        return darkTheme;
      }
      else {
        return DefaultTheme;
      }
    }
    else if (selectedTheme === 1) {
      return lightTheme;
    }
    else if (selectedTheme === 2) {
      return darkTheme;
    }
    else {
      return DefaultTheme;
    }
  }, [selectedTheme, scheme])

  return (
    <NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
      <BottomTabs.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
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