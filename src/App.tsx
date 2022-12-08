import { useContext, useEffect } from 'react';

import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import CustomModal from './components/Modal/CustomModal';
import CitiesContextProvider, { CitiesContext } from './context/CitiesContext';
import LoadingLayerContextProvider from './context/LoadingLayerContext';
import ModalContextProvider from './context/ModalContext';
import Router from './router/Router';
import LoadingError from './screens/Loading/Error';
import LoadingScreen from './screens/Loading/Loading';

const App = () => {
  return (
    <CitiesContextProvider>
      <LoadingLayerContextProvider>
        <ModalContextProvider>
          <Base />
        </ModalContextProvider>
      </LoadingLayerContextProvider>
    </CitiesContextProvider>
  );
}

const Base = () => {
  const { fetchAllCities, loading, error } = useContext(CitiesContext);

  useEffect(() => {
    fetchAllCities();
  }, []);

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