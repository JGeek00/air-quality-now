import axios from 'axios';

import { nominatimUrl, apiUrl } from './../config/urls';
import { LocationQuery } from './../models/LocationQuery';
import { CityQuery } from './../models/CityQuery';
import { AddressQuery } from '../models/AddressQuery';

export const getAllCities = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/cities?limit=100000&sort=asc&order_by=city`
    );
    return <CityQuery>{...response.data};
  } catch (error) {
    return null;
  }
}

export const getCityLocations = async (city: string, page: number) => {
  const limit: number = 100;
  try {
    const response = await axios.get(
      `${apiUrl}/locations?limit=${limit}&page=${page}&offset=${(limit*page)-limit}&sort=desc&city=${city}&order_by=lastUpdated&dumpRaw=false`
    );
    return <LocationQuery>{...response.data};
  } catch (error) {
    return null;
  }
}

export const getAddressFromCoordinates = async (x: number, y: number) => {
  try {
    const response = await axios.get(
      `${nominatimUrl}/reverse?lat=${x}&lon=${y}&format=json`
    );
    return <AddressQuery>{...response.data};
  } catch (error) {
    return null;
  }
}