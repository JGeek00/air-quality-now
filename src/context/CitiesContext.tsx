import { createContext, ReactNode, useState } from "react";
import { City, CityQuery } from '../models/CityQuery';
import { getCitiesByName } from "../services/apiRequests";

interface CitiesContextProps {
  searchValue: string,
  loading: boolean,
  data: City[],
  error: boolean,
  fetchCities(): void,
  setSearchValue(value: string): void,
  actualPage: number | null,
  limit: number | null
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
  limit: null
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
        limit
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesContextProvider;

