import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stops } from "./Stops";
import { Trips } from "./Trips";

@Index("stop_times_pkey", ["stopTimeId"], { unique: true })
@Entity("stop_times", { schema: "public" })
export class StopTimes {
  @PrimaryGeneratedColumn({ type: "integer", name: "stop_time_id" })
  stopTimeId: number;

  @Column("character varying", {
    name: "arrival_time",
    nullable: true,
    length: 63,
  })
  arrivalTime: string | null;

  @Column("character varying", {
    name: "departure_time",
    nullable: true,
    length: 63,
  })
  departureTime: string | null;

  @Column("integer", { name: "stop_sequence", nullable: true })
  stopSequence: number | null;

  @Column("integer", { name: "pickup_type", nullable: true })
  pickupType: number | null;

  @Column("integer", { name: "drop_off_type", nullable: true })
  dropOffType: number | null;

  @Column("character varying", {
    name: "local_zone_id",
    nullable: true,
    length: 255,
  })
  localZoneId: string | null;

  @Column("character varying", {
    name: "stop_headsign",
    nullable: true,
    length: 255,
  })
  stopHeadsign: string | null;

  @Column("integer", { name: "timepoint", nullable: true })
  timepoint: number | null;

  @ManyToOne(() => Stops, (stops) => stops.stopTimes)
  @JoinColumn([{ name: "stop_id", referencedColumnName: "stopId" }])
  stop: Stops;

  @ManyToOne(() => Trips, (trips) => trips.stopTimes)
  @JoinColumn([{ name: "trip_id", referencedColumnName: "tripId" }])
  trip: Trips;
}
