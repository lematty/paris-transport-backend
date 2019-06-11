import { Column, Entity } from 'typeorm';

@Entity('trips', { schema: 'public' } )
export class Trip {

  @Column({ primary: true, nullable: true, length: 255, name: 'trip_id' })
  tripId: string | null;

  @Column({ nullable: true, length: 255, name: 'route_id' })
  routeId: string | null;

  @Column({ nullable: true, length: 255, name: 'service_id' })
  serviceId: string | null;

  @Column({ nullable: true, length: 255, name: 'trip_headsign' })
  tripHeadsign: string | null;

  @Column({ nullable: true, length: 255, name: 'trip_short_name' })
  tripShortName: string | null;

  @Column({ nullable: true, length: 255, name: 'direction_id' })
  directionId: string | null;

  @Column({ nullable: true, length: 255, name: 'shape_id' })
  shapeId: string | null;
}
