import { useContext, useEffect, useMemo } from 'react';
import { StatusBar, StatusBarStyle, useColorScheme } from 'react-native';

import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import CustomModal from './components/Modal/CustomModal';
import CitiesContextProvider, { CitiesContext } from './context/CitiesContext';
import LoadingLayerContextProvider from './context/LoadingLayerContext';
import ModalContextProvider from './context/ModalContext';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import Router from './router/Router';
import LoadingError from './screens/Loading/Error';
import LoadingScreen from './screens/Loading/Loading';

const App = () => {
  return (
    <ThemeContextProvider>
      <CitiesContextProvider>
      <LoadingLayerContextProvider>
        <ModalContextProvider>
          <Base />
        </ModalContextProvider>
      </LoadingLayerContextProvider>
    </CitiesContextProvider>
    </ThemeContextProvider>
  );
}

interface StatusBarTheme {
  backgroundColor: string,
  icons: StatusBarStyle
}

const Base = () => {
  const { fetchAllCities, loading, error } = useContext(CitiesContext);

  const scheme = useColorScheme();
  const { selectedTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetchAllCities();
  }, []);

  const topBarTheme: StatusBarTheme = useMemo(() => {
    if (selectedTheme === 0) {
      if (scheme === 'light') {
        return {
          backgroundColor: 'white',
          icons: 'dark-content'
        };
      }
      else {
        return {
          backgroundColor: 'rgb(20, 20, 20)',
          icons: 'light-content'
        };
      }
    }
    else if (selectedTheme === 1) {
      return {
        backgroundColor: 'white',
        icons: 'dark-content'
      };
    }
    else {
      return {
        backgroundColor: 'rgb(20, 20, 20)',
        icons: 'light-content'
      };
    }
  }, [selectedTheme, scheme]);

  return (
    <>
      {
        loading ? (
          <LoadingScreen />
        ) : (
          error ? (
            <LoadingError />
          ) : (
            <>
              <StatusBar
                animated={true}
                backgroundColor={topBarTheme.backgroundColor}
                barStyle={topBarTheme.icons}
              />
              <Router />
              <LoadingOverlay />
              <CustomModal />
            </>
          )
        )
      }
    </>
  )
}
 
export default App;