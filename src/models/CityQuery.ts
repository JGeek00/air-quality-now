export interface CityQuery {
  meta: Meta;
  results: City[];
}

export interface Meta {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}

export interface City {
  id: string,
  country: string;
  city: string;
  count: number;
  locations: number;
  firstUpdated: Date;
  lastUpdated: Date;
  parameters: string[];
}