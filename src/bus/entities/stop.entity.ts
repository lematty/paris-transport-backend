import { Column, Entity } from 'typeorm';

@Entity('stops', {schema: 'public' } )
export class Stop {

  @Column({ primary: true, nullable: true, length: 255, name: 'stop_id' })
  stopId: string | null;

  @Column({ nullable: true, length: 255, name: 'stop_code' })
  stopCode: string | null;

  @Column({ nullable: true, length: 63, name: 'stop_name' })
  stopName: string | null;

  @Column({ nullable: true, length: 255, name: 'stop_desc' })
  stopDesc: string | null;

  @Column({ nullable: true, length: 255, name: 'stop_lat' })
  stopLat: string | null;

  @Column({ nullable: true, length: 255, name: 'stop_lon' })
  stopLon: string | null;

  @Column({ nullable: true, length: 255, name: 'location_type' })
  locationType: string | null;

  @Column({ nullable: true, length: 255, name: 'parent_station' })
  parentStation: string | null;
}
