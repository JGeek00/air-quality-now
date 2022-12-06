import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import SearchField from "../../components/SearchField/SearchField";
import { LoadingLayerContext } from "../../context/LoadingLayerContext";
import { ModalContext } from "../../context/ModalContext";
import { getCitiesByName } from "../../services/apiRequests";


import {homeStyles as styles} from "./Home.styles";
import NoCityFoundModal from "./NoCityFoudModal";


const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const { setLoading, cancelLoading, loadingStatus } = useContext(LoadingLayerContext);
  const { 
    setVisible: setModalVisible, 
    setContent: setModalContent
  } = useContext(ModalContext);

  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (loadingStatus === true) {
          return;
        }

        e.preventDefault();
      }),
    [navigation]
  );

  const searchCity = async () => {
    setLoading({
      status: true,
      message: 'Searching city...'
    });

    const result = await getCitiesByName(searchValue);
    
    cancelLoading();

    if (result) {
      if (result.results.length > 1) {
        
      }
      else if (result.results.length === 1) {

      }
      else {
        setModalContent(<NoCityFoundModal />);
        setModalVisible(true);
      }
    }
    else {
      // todo error
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <Text style={styles.appName}>Air Quality Now</Text>
        <SearchField 
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={searchCity}
          placeholder="Search a city"
        />
      </View>
    </View>
  );
}
 
export default HomeScreen;