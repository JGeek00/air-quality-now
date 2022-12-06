import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import CustomModal from './components/Modal/CustomModal';
import CitiesContextProvider from './context/CitiesContext';
import LoadingLayerContextProvider from './context/LoadingLayerContext';
import ModalContextProvider from './context/ModalContext';
import Router from './router/Router';

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
  return (
    <>
      <Router />
      <LoadingOverlay />
      <CustomModal />
    </>
  )
}
 
export default App;