import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar', { schema: 'public' } )
export class Calendar {

  @PrimaryGeneratedColumn({ type: 'integer', name: 'calendar_id' })
  calendarId: number;

  @Column({ nullable: true, length: 255, name: 'service_id' })
  serviceId: string | null;

  @Column({ nullable: true, length: 255, name: 'monday' })
  monday: string | null;

  @Column({ nullable: true, length: 255, name: 'tuesday' })
  tuesday: string | null;

  @Column({ nullable: true, length: 255, name: 'wednesday' })
  wednesday: string | null;

  @Column({ nullable: true, length: 255, name: 'thursday' })
  thursday: string | null;

  @Column({ nullable: true, length: 255, name: 'friday' })
  friday: string | null;

  @Column({ nullable: true, length: 255, name: 'saturday' })
  saturday: string | null;

  @Column({ nullable: true, length: 255, name: 'sunday' })
  sunday: string | null;

  @Column({ nullable: true, length: 255, name: 'start_date' })
  startDate: string | null;

  @Column({ nullable: true, length: 255, name: 'end_date' })
  endDate: string | null;
}
