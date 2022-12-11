import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { tabs } from '../../config/screens';
import { darkRipple, lightRipple, subtextDarkTheme, subtextLightTheme } from '../../config/theme';
import CustomText from '../CustomText/CustomText';
import { useStyles } from './NavigationBar.styles';

const CustomNavigationBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      {
        state.routes.map((item, index) => (
          <View key={item.key} style={styles.wrapper}>
            <Pressable 
              onPress={() => navigation.navigate(tabs[index].id)}
              android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
            >
              <View style={styles.tabItem}>
                <Icon 
                  style={[
                    styles.icon, 
                    state.index === index ? {color: theme.colors.primary} : (theme.dark ? {color: subtextDarkTheme} : {color: subtextLightTheme})
                  ]} 
                  name={tabs[index].icon} 
                  size={26} 
                />
                <CustomText 
                  style={[
                    styles.tabText, 
                    state.index === index ? {color: theme.colors.primary} :  {color: theme.dark ? subtextDarkTheme : subtextLightTheme} 
                  ]}
                >
                  {tabs[index].name}
                </CustomText>
              </View>
            </Pressable>
          </View>
        ))
      }
    </View>
  );
}
 
export default CustomNavigationBar;