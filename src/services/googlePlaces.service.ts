import { LatLng } from '@ts/entities/LatLng';
import axios from 'axios';

export type GeoListItem = {
  mainText: string;
  secondaryText: string;
  fullText: string;
};

export class GooglePlacesService {
  static async getSuggestions(searchStr: string): Promise<GeoListItem[]> {
    const res = await axios.get(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      {
        params: {
          input: searchStr,
          language: 'pt-BR',
          key: process.env.GOOGLE_PLACES_API_KEY,
        },
      }
    );
    const formattedData = res.data?.predictions.map((pred: any) => ({
      mainText: pred.structured_formatting.main_text,
      secondaryText: pred.structured_formatting.secondary_text,
      fullText: pred.description,
    }));
    return formattedData;
  }

  static async addressToCoordinates(address: string): Promise<LatLng> {
    const res = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address,
          key: process.env.GOOGLE_PLACES_API_KEY,
        },
      }
    );
    const formattedData = {
      latitude: res.data.results[0].geometry.location.lat,
      longitude: res.data.results[0].geometry.location.lng,
    };
    return formattedData;
  }

  static tryExtractStreetAndNumber(address: string): {
    street: string;
    number: string;
  } {
    const number = `${
      address
        .split(' ')
        .map((e) => parseInt(e, 10))
        .filter(Boolean)[0] || ''
    }`;
    const street = address.split(',')[0].replace(/\d+/g, '');
    return { street, number };
  }
}
