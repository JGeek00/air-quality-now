import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './NavigationBar.styles';
import { tabs } from '../../config/screens';
import { lightTheme } from '../../config/theme';
import CustomText from '../CustomText/CustomText';

const CustomNavigationBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  return (
    <View style={styles.container}>
      {
        state.routes.map((item, index) => (
          <View key={item.key} style={styles.wrapper}>
            <Pressable 
              onPress={() => navigation.navigate(tabs[index].id)}
              android_ripple={{color: '#ccc'}}
            >
              <View style={styles.tabItem}>
                <Icon 
                  style={[
                    styles.icon, 
                    state.index === index ? {color: lightTheme.primaryColor} : null
                  ]} 
                  name={tabs[index].icon} 
                  size={26} 
                />
                <CustomText 
                  style={[
                    styles.tabText, 
                    state.index === index ? {color: lightTheme.primaryColor} : null
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