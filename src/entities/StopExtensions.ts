import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stops } from "./Stops";

@Index("stop_extensions_pkey", ["stopExtensionId"], { unique: true })
@Entity("stop_extensions", { schema: "public" })
export class StopExtensions {
  @PrimaryGeneratedColumn({ type: "integer", name: "stop_extension_id" })
  stopExtensionId: number;

  @Column("character varying", {
    name: "object_system",
    nullable: true,
    length: 255,
  })
  objectSystem: string | null;

  @Column("character varying", {
    name: "object_code",
    nullable: true,
    length: 255,
  })
  objectCode: string | null;

  @ManyToOne(() => Stops, (stops) => stops.stopExtensions)
  @JoinColumn([{ name: "object_id", referencedColumnName: "stopId" }])
  object: Stops;
}
