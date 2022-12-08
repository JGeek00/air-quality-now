export interface LocationQuery {
  meta: Meta;
  results: Location[];
}

export interface Meta {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}

export interface Location {
  id: number;
  city: string;
  name: string;
  entity: string;
  country: string;
  sources: string[];
  isMobile: boolean;
  isAnalysis: boolean;
  parameters: ParameterElement[];
  sensorType: string;
  coordinates: Coordinates;
  lastUpdated: Date;
  firstUpdated: Date;
  measurements: number;
  bounds: null;
  manufacturers: null;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface ParameterElement {
  id: number;
  unit: string;
  count: number;
  average: number;
  lastValue: number;
  parameter: string;
  displayName: string;
  lastUpdated: Date;
  parameterId: number;
  firstUpdated: Date;
  manufacturers: null;
}
