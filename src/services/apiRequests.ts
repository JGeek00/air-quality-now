import { CityQuery } from './../models/CityQuery';
import axios from 'axios';
import apiUrl from '../config/apiUrl';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

export const getCitiesByName = async (name: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}/cities?limit=100&page=1&offset=0&sort=asc&city=${capitalizeFirstLetter(name)}&order_by=city`
    );
    return <CityQuery>{...response.data};
  } catch (error) {
    return null;
  }
}