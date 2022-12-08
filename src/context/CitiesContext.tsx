import { createContext, ReactNode, useState } from "react";
import { City, CityQuery } from '../models/CityQuery';
import { getAllCities } from "../services/apiRequests";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

interface CitiesContextProps {
  loading: boolean,
  data: City[],
  error: boolean,
  fetchAllCities: Function,
  retry: Function
}

interface CitiesContextProviderProps {
  children: ReactNode
}

export const CitiesContext = createContext<CitiesContextProps>({
  loading: false,
  data: [],
  error: false,
  fetchAllCities: () => {},
  retry: () => {}
});

const CitiesContextProvider: React.FC<CitiesContextProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<City[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchAllCities = async () => {
    const result = await getAllCities();
    setLoading(false);
    if (result) {
      setData(result.results.map(item => {
        return {
          ...item,
          id: uuid()
        }
      }));
    }
    else {
      setError(true);
    }
  }

  const retry = async () => {
    setLoading(true);
    setError(false);
    await fetchAllCities();
  }

  return (
    <CitiesContext.Provider
      value={{ 
        loading, 
        data, 
        error,
        fetchAllCities,
        retry
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesContextProvider;

