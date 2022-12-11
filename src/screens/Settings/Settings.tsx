import { useTheme } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Linking, Platform, Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from "react-native-device-info";
import { ScrollView } from "react-native-gesture-handler";

import CustomText from "../../components/CustomText/CustomText";
import RadioListItem from "../../components/RadioListItem/RadioListItem";
import { createdBy } from "../../constants/appInfo";
import { ThemeContext } from "../../context/ThemeContext";
import SectionLabel from "./SectionLabel";
import { useSettingsStyles } from "./Settings.styles";
import { darkRipple, lightRipple } from "../../config/theme";
import GitHubIcon from '../../assets/icons/github-icon.svg';
import GooglePlayIcon from '../../assets/icons/google-play-icon.svg';
import IconButtonSvg from "../../components/IconButton/IconButtonSvg";
import { gitHubUrl, googlePlayUrl } from "../../config/urls";


const SettingsScreen = () => {
  const [openNewPressed, setOpenNewPressed] = useState<boolean>(false);

  const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
  
  const theme = useTheme();
  const styles = useSettingsStyles(theme);

  const openURL = async (url: string) => {
    await Linking.openURL(url);
  }

  return (
    <ScrollView style={styles.screen}>
      <SectionLabel label="Theme" />
      <RadioListItem
        label="System defined" 
        value={0}
        groupValue={selectedTheme}
        onTap={(value: number) => setSelectedTheme(value)}
      />
      <RadioListItem
        label="Light" 
        value={1}
        groupValue={selectedTheme}
        onTap={(value: number) => setSelectedTheme(value)}
      />
      <RadioListItem
        label="Dark" 
        value={2}
        groupValue={selectedTheme}
        onTap={(value: number) => setSelectedTheme(value)}
      />
      <SectionLabel label="About" />
      <Pressable 
        style={[
          styles.infoItem,
          openNewPressed && Platform.OS !== 'android' ? {backgroundColor: theme.dark ? darkRipple : lightRipple} : null
        ]}
        onPress={() => openURL('https://docs.openaq.org/docs')}
        onPressIn={() => setOpenNewPressed(true)}
        onPressOut={() => setOpenNewPressed(false)}
        android_ripple={{color: theme.dark ? darkRipple : lightRipple}}
      >
        <CustomText style={styles.infoLabel}>Data source</CustomText>
        <Icon name="open-in-new" size={18} />
      </Pressable>
      <View style={styles.infoItem}>
        <CustomText style={styles.infoLabel}>App version</CustomText>
        <CustomText>{DeviceInfo.getVersion()}</CustomText>
      </View>
      <View style={styles.infoItem}>
        <CustomText style={styles.infoLabel}>Created by</CustomText>
        <CustomText>{createdBy}</CustomText>
      </View>
      <View style={styles.iconButtons}>
        {gitHubUrl ? (
          <IconButtonSvg 
            component={<GitHubIcon width={35} height={35} fill={theme.colors.text} />}
            onPress={() => {openURL(gitHubUrl)}}
          />
        ) : null}
        {googlePlayUrl ? (
          <IconButtonSvg 
            component={<GooglePlayIcon width={35} height={35} fill={theme.colors.text} />}
            onPress={() => {openURL(googlePlayUrl)}}
          />
        ) : null}
      </View>
    </ScrollView>
  );
}
 
export default SettingsScreen;