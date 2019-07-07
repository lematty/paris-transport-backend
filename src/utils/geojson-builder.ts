import { FeatureCollection, Feature, LineString, Position } from 'geojson';
import { Stops } from 'src/bus/entities';

export class GeojsonBuilder {
  async formatGeoJson(data: Stops[]): Promise<FeatureCollection> {
    return {
      type: 'FeatureCollection',
      features: await this.buildFeatures(data),
    };
  }

  buildFeatures(data: Stops[]): Feature[] {
    let properties;
    const coordinates = data.map((station: Stops) => {
      const { stopLat, stopLon } = station;
      properties = station;
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
}
