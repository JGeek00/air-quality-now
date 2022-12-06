import { createContext, ReactNode, useState } from "react";
import { City, CityQuery } from '../models/CityQuery';
import { getAllCities, getCitiesByName } from "../services/apiRequests";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

interface CitiesContextProps {
  searchValue: string,
  loading: boolean,
  data: City[],
  error: boolean,
  fetchCities(): void,
  setSearchValue(value: string): void,
  actualPage: number | null,
  limit: number | null,
  fetchAllCities: Function
}

interface CitiesContextProviderProps {
  children: ReactNode
}

export const CitiesContext = createContext<CitiesContextProps>({
  searchValue: '',
  loading: false,
  data: [],
  error: false,
  fetchCities: () => {},
  setSearchValue: (value: string) => {},
  actualPage: null,
  limit: null,
  fetchAllCities: () => {}
});

const CitiesContextProvider: React.FC<CitiesContextProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<City[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [actualPage, setActualPage] = useState<number | null>(null);
  const [limit, setLimit] = useState<number | null>(null);

  const fetchCities = async () => {
    setLoading(true);

    const result = await getCitiesByName(searchValue);
    if (result) {
      setData(result.results)
    }
    else {
      setError(true);
    }
  }

  const fetchAllCities = async () => {
    const result = await getAllCities();
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
        fetchCities,
        searchValue, 
        setSearchValue,
        actualPage,
        limit, 
        fetchAllCities
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesContextProvider;

