import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stop_times', {schema: 'public' } )
export class StopTime {

  @PrimaryGeneratedColumn({ type: 'integer', name: 'stop_time_id' })
  stopTimeId: number;

  @Column({ nullable: true, length: 255, name: 'trip_id' })
  tripId: string | null;

  @Column({ nullable: true, length: 63, name: 'arrival_time' })
  arrivalTime: string | null;

  @Column({ nullable: true, length: 63, name: 'departure_time' })
  departureTime: string | null;

  @Column({ nullable: true, length: 255, name: 'stop_id' })
  stopId: string | null;

  @Column({ nullable: true, length: 255, name: 'stop_sequence' })
  stopSequence: string | null;

  @Column({ nullable: true, length: 255, name: 'stop_headsign' })
  stopHeadsign: string | null;

  @Column({ nullable: true, length: 255, name: 'shape_dist_traveled' })
  shapeDistTraveled: string | null;
}
