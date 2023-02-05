import { Column, Entity, Index, OneToMany } from "typeorm";
import { Pathways } from "./Pathways";
import { StopExtensions } from "./StopExtensions";
import { StopTimes } from "./StopTimes";
import { Transfers } from "./Transfers";

@Index("stops_pkey", ["stopId"], { unique: true })
@Entity("stops", { schema: "public" })
export class Stops {
  @Column("character varying", { primary: true, name: "stop_id", length: 255 })
  stopId: string;

  @Column("integer", { name: "stop_code", nullable: true })
  stopCode: number | null;

  @Column("character varying", {
    name: "stop_name",
    nullable: true,
    length: 255,
  })
  stopName: string | null;

  @Column("character varying", {
    name: "stop_desc",
    nullable: true,
    length: 255,
  })
  stopDesc: string | null;

  @Column("character varying", {
    name: "stop_lon",
    nullable: true,
    length: 255,
  })
  stopLon: string | null;

  @Column("character varying", {
    name: "stop_lat",
    nullable: true,
    length: 255,
  })
  stopLat: string | null;

  @Column("integer", { name: "zone_id", nullable: true })
  zoneId: number | null;

  @Column("character varying", {
    name: "stop_url",
    nullable: true,
    length: 255,
  })
  stopUrl: string | null;

  @Column("integer", { name: "location_type", nullable: true })
  locationType: number | null;

  @Column("character varying", {
    name: "parent_station",
    nullable: true,
    length: 255,
  })
  parentStation: string | null;

  @Column("character varying", {
    name: "stop_timezone",
    nullable: true,
    length: 255,
  })
  stopTimezone: string | null;

  @Column("character varying", {
    name: "level_id",
    nullable: true,
    length: 255,
  })
  levelId: string | null;

  @Column("integer", { name: "wheelchair_boarding", nullable: true })
  wheelchairBoarding: number | null;

  @Column("character varying", {
    name: "platform_code",
    nullable: true,
    length: 255,
  })
  platformCode: string | null;

  @OneToMany(() => Pathways, (pathways) => pathways.fromStop)
  pathways: Pathways[];

  @OneToMany(() => Pathways, (pathways) => pathways.toStop)
  pathways2: Pathways[];

  @OneToMany(() => StopExtensions, (stopExtensions) => stopExtensions.object)
  stopExtensions: StopExtensions[];

  @OneToMany(() => StopTimes, (stopTimes) => stopTimes.stop)
  stopTimes: StopTimes[];

  @OneToMany(() => Transfers, (transfers) => transfers.fromStop)
  transfers: Transfers[];

  @OneToMany(() => Transfers, (transfers) => transfers.toStop)
  transfers2: Transfers[];
}
