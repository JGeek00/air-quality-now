import { createContext, ReactNode, useState } from "react";

interface Loading {
  status: boolean,
  message: string
}

interface LoadingLayerContextProps {
  loadingStatus: boolean | null,
  setLoading(value: Loading): void,
  cancelLoading(): void,
  message: string
}

interface LoadingLayerProviderProps {
  children: ReactNode
}

export const LoadingLayerContext = createContext<LoadingLayerContextProps>({
  loadingStatus: false,
  setLoading: (value: Loading) => {},
  cancelLoading: () => {},
  message: ''
});

const LoadingLayerProvider: React.FC<LoadingLayerProviderProps> = ({ children }) => {
  const [loadingStatus, setLoadingStatus] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string>('');

  const setLoading = (value: Loading | null) => {
    if (value) {
      setMessage(value.message);
      setLoadingStatus(value.status);
    }
    else {
      setLoadingStatus(false);
    }
  }

  const cancelLoading = () => {
    setLoadingStatus(false);
    setMessage('');
  }

  return (
    <LoadingLayerContext.Provider
      value={{ 
        loadingStatus,
        message, 
        setLoading,
        cancelLoading
      }}
    >
      {children}
    </LoadingLayerContext.Provider>
  );
}

export default LoadingLayerProvider;

