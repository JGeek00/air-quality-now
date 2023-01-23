import { useTheme } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Linking, Platform, Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from "react-native-device-info";
import { ScrollView } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";

import CustomText from "../../components/CustomText/CustomText";
import RadioListItem from "../../components/RadioListItem/RadioListItem";
import { createdBy } from "../../constants/appInfo";
import { ThemeContext } from "../../context/ThemeContext";
import SectionLabel from "./SectionLabel";
import { useSettingsStyles } from "./Settings.styles";
import { darkRipple, lightRipple, subtextDarkTheme, subtextLightTheme } from "../../config/theme";
import GitHubIcon from '../../assets/icons/github-icon.svg';
import GooglePlayIcon from '../../assets/icons/google-play-icon.svg';
import IconButtonSvg from "../../components/IconButton/IconButtonSvg";
import { gitHubUrl, googlePlayUrl } from "../../config/urls";

const SettingsScreen = () => {
  const [openNewPressed, setOpenNewPressed] = useState<boolean>(false);

  const { selectedTheme, updateSelectedTheme } = useContext(ThemeContext);
  
  const theme = useTheme();
  const styles = useSettingsStyles(theme);

  const { t } = useTranslation();

  const openURL = async (url: string) => {
    await Linking.openURL(url);
  }

  return (
    <ScrollView style={styles.screen}>
      <SectionLabel label={t('settings.body.theme')} />
      <RadioListItem
        label={t('settings.body.systemDefined')}
        value={0}
        groupValue={selectedTheme}
        onTap={(value: number) => updateSelectedTheme(value)}
      />
      <RadioListItem
        label={t('settings.body.light')}
        value={1}
        groupValue={selectedTheme}
        onTap={(value: number) => updateSelectedTheme(value)}
      />
      <RadioListItem
        label={t('settings.body.dark')}
        value={2}
        groupValue={selectedTheme}
        onTap={(value: number) => updateSelectedTheme(value)}
      />
      <SectionLabel label={t('settings.body.about')} />
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
        <CustomText style={styles.infoLabel}>{t('settings.body.dataSource')}</CustomText>
        <Icon name="open-in-new" size={18} color={theme.dark ? subtextDarkTheme : subtextLightTheme} />
      </Pressable>
      <View style={styles.infoItem}>
        <CustomText style={styles.infoLabel}>{t('settings.body.appVersion')}</CustomText>
        <CustomText>{DeviceInfo.getVersion()}</CustomText>
      </View>
      <View style={styles.infoItem}>
        <CustomText style={styles.infoLabel}>{t('settings.body.createdBy')}</CustomText>
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