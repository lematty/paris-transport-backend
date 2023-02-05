import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { StopTimes } from "./StopTimes";
import { Routes } from "./Routes";
import { Calendar } from "./Calendar";

@Index("trips_pkey", ["tripId"], { unique: true })
@Entity("trips", { schema: "public" })
export class Trips {
  @Column("character varying", { primary: true, name: "trip_id", length: 255 })
  tripId: string;

  @Column("character varying", {
    name: "trip_headsign",
    nullable: true,
    length: 255,
  })
  tripHeadsign: string | null;

  @Column("character varying", {
    name: "trip_short_name",
    nullable: true,
    length: 255,
  })
  tripShortName: string | null;

  @Column("integer", { name: "direction_id", nullable: true })
  directionId: number | null;

  @Column("character varying", {
    name: "block_id",
    nullable: true,
    length: 255,
  })
  blockId: string | null;

  @Column("character varying", {
    name: "shape_id",
    nullable: true,
    length: 255,
  })
  shapeId: string | null;

  @Column("integer", { name: "wheelchair_accessible", nullable: true })
  wheelchairAccessible: number | null;

  @Column("integer", { name: "bikes_allowed", nullable: true })
  bikesAllowed: number | null;

  @OneToMany(() => StopTimes, (stopTimes) => stopTimes.trip)
  stopTimes: StopTimes[];

  @ManyToOne(() => Routes, (routes) => routes.trips)
  @JoinColumn([{ name: "route_id", referencedColumnName: "routeId" }])
  route: Routes;

  @ManyToOne(() => Calendar, (calendar) => calendar.trips)
  @JoinColumn([{ name: "service_id", referencedColumnName: "serviceId" }])
  service: Calendar;
}
