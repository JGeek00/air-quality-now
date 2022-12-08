import { createContext, ReactNode, useState } from "react";
import { City, CityQuery } from '../models/CityQuery';
import { getAllCities, getCitiesByName } from "../services/apiRequests";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

interface CitiesContextProps {
  loading: boolean,
  data: City[],
  error: boolean,
  fetchAllCities: Function
}

interface CitiesContextProviderProps {
  children: ReactNode
}

export const CitiesContext = createContext<CitiesContextProps>({
  loading: false,
  data: [],
  error: false,
  fetchAllCities: () => {}
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

  return (
    <CitiesContext.Provider
      value={{ 
        loading, 
        data, 
        error,
        fetchAllCities
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesContextProvider;

