import { FeatureCollection, Feature, LineString, Position, Point } from 'geojson';
import { Stops } from '../entities';

export class GeojsonBuilder {
  async formatGeoJson(data: Stops[], type: string): Promise<FeatureCollection> {
    return {
      type: 'FeatureCollection',
      features: type === 'stations'
        ? await this.buildStationFeatures(data)
        : await this.buildLineFeatures(data),
    };
  }

  buildLineFeatures(data: Stops[]): Feature[] {
    let properties: any;
    const coordinates = data.map((station: Stops) => {
      const { stopLat, stopLon, ...metadata } = station;
      properties = metadata;
      return [+stopLon, +stopLat];
    });
    const features: Feature[] = [{
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: coordinates as Position[],
      } as LineString,
      properties,
    }] as Feature[];
    return features;
  }

  buildStationFeatures(data: Stops[]): Feature[] {
    const features: Feature[] = data.map((station: Stops) => {
      const { stopLat, stopLon, ...metadata } = station;
      const feature: Feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [+station.stopLon, +station.stopLat],
        },
        properties: metadata,
      };
      return feature;
    });
    return features;
  }
}
