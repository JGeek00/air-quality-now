import { useContext } from "react";
import { Text, View } from "react-native";
import CustomButton from "../../components/Button/CustomButton";
import CustomText from "../../components/CustomText/CustomText";
import { lightTheme } from "../../config/theme";
import { ModalContext } from "../../context/ModalContext";

import { noCityFoundModalStyles as styles } from './Home.styles';

const NoCityFoundModal = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <View style={styles.wrapper}>
      <CustomText style={styles.title}>
        City not found
      </CustomText>
      <CustomText style={styles.description}>
        The city you introduced is not available on the database.
      </CustomText>
      <View style={styles.buttons}>
        <CustomButton 
          text="Close"
          onPress={() => closeModal()} 
          textColor={lightTheme.primaryColor}
        />
      </View>
    </View>
  );
}
 
export default NoCityFoundModal;