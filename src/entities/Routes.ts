import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Agency } from "./Agency";
import { Trips } from "./Trips";

@Index("routes_pkey", ["routeId"], { unique: true })
@Entity("routes", { schema: "public" })
export class Routes {
  @Column("character varying", { primary: true, name: "route_id", length: 255 })
  routeId: string;

  @Column("character varying", {
    name: "route_short_name",
    nullable: true,
    length: 255,
  })
  routeShortName: string | null;

  @Column("character varying", {
    name: "route_long_name",
    nullable: true,
    length: 255,
  })
  routeLongName: string | null;

  @Column("character varying", {
    name: "route_desc",
    nullable: true,
    length: 255,
  })
  routeDesc: string | null;

  @Column("integer", { name: "route_type", nullable: true })
  routeType: number | null;

  @Column("character varying", {
    name: "route_url",
    nullable: true,
    length: 255,
  })
  routeUrl: string | null;

  @Column("character varying", {
    name: "route_color",
    nullable: true,
    length: 255,
  })
  routeColor: string | null;

  @Column("character varying", {
    name: "route_text_color",
    nullable: true,
    length: 255,
  })
  routeTextColor: string | null;

  @Column("character varying", {
    name: "route_sort_order",
    nullable: true,
    length: 255,
  })
  routeSortOrder: string | null;

  @ManyToOne(() => Agency, (agency) => agency.routes)
  @JoinColumn([{ name: "agency_id", referencedColumnName: "agencyId" }])
  agency: Agency;

  @OneToMany(() => Trips, (trips) => trips.route)
  trips: Trips[];
}
