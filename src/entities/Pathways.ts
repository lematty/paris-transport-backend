import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Stops } from "./Stops";

@Index("pathways_pkey", ["pathwayId"], { unique: true })
@Entity("pathways", { schema: "public" })
export class Pathways {
  @Column("character varying", {
    primary: true,
    name: "pathway_id",
    length: 255,
  })
  pathwayId: string;

  @Column("integer", { name: "pathway_mode", nullable: true })
  pathwayMode: number | null;

  @Column("integer", { name: "is_bidirectional", nullable: true })
  isBidirectional: number | null;

  @Column("integer", { name: "length", nullable: true })
  length: number | null;

  @Column("integer", { name: "traversal_time", nullable: true })
  traversalTime: number | null;

  @Column("character varying", {
    name: "stair_count",
    nullable: true,
    length: 15,
  })
  stairCount: string | null;

  @Column("character varying", {
    name: "max_slope",
    nullable: true,
    length: 15,
  })
  maxSlope: string | null;

  @Column("character varying", {
    name: "min_width",
    nullable: true,
    length: 15,
  })
  minWidth: string | null;

  @Column("character varying", {
    name: "signposted_as",
    nullable: true,
    length: 15,
  })
  signpostedAs: string | null;

  @Column("character varying", {
    name: "reversed_signposted_as",
    nullable: true,
    length: 15,
  })
  reversedSignpostedAs: string | null;

  @ManyToOne(() => Stops, (stops) => stops.pathways)
  @JoinColumn([{ name: "from_stop_id", referencedColumnName: "stopId" }])
  fromStop: Stops;

  @ManyToOne(() => Stops, (stops) => stops.pathways2)
  @JoinColumn([{ name: "to_stop_id", referencedColumnName: "stopId" }])
  toStop: Stops;
}
