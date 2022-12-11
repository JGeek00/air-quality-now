import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

import CustomText from "../../components/CustomText/CustomText";
import { useSectionLabelStyles } from "./Settings.styles";

interface Props {
  label: string
}

const SectionLabel = ({ label }: Props) => {
  const theme = useTheme();
  const styles = useSectionLabelStyles(theme);

  return (
    <View style={styles.sectionLabel}>
      <View style={styles.sectionDivider}></View>
      <CustomText style={styles.sectionText}>{label}</CustomText>
      <View style={styles.sectionDivider}></View>
    </View>
  );
}
 
export default SectionLabel;