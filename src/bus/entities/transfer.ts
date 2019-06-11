import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transfers', {schema: 'public' } )
export class Transfer {

  @PrimaryGeneratedColumn({ type: 'integer', name: 'transfer_id' })
  transferId: number;

  @Column({ nullable: true, length: 255, name: 'from_stop_id' })
  fromStopId: string | null;

  @Column({ nullable: true, length: 255, name: 'to_stop_id' })
  toStopId: string | null;

  @Column({ nullable: true, length: 255, name: 'transfer_type' })
  transferType: string | null;

  @Column({ nullable: true, length: 255, name: 'min_transfer_time' })
  minTransferTime: string | null;
}
