import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stops } from "./Stops";

@Index("transfers_pkey", ["transferId"], { unique: true })
@Entity("transfers", { schema: "public" })
export class Transfers {
  @PrimaryGeneratedColumn({ type: "integer", name: "transfer_id" })
  transferId: number;

  @Column("integer", { name: "transfer_type", nullable: true })
  transferType: number | null;

  @Column("integer", { name: "min_transfer_time", nullable: true })
  minTransferTime: number | null;

  @ManyToOne(() => Stops, (stops) => stops.transfers)
  @JoinColumn([{ name: "from_stop_id", referencedColumnName: "stopId" }])
  fromStop: Stops;

  @ManyToOne(() => Stops, (stops) => stops.transfers2)
  @JoinColumn([{ name: "to_stop_id", referencedColumnName: "stopId" }])
  toStop: Stops;
}
