import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar_dates', { schema: 'public' } )
export class CalendarDate {

  @PrimaryGeneratedColumn({ type: 'integer', name: 'calendar_date_id' })
  calendarDateId: number;

  @Column({ nullable: true, length: 255, name: 'service_id' })
  serviceId: string | null;

  @Column({ nullable: true, length: 255, name: 'date' })
  date: string | null;

  @Column({ nullable: true, length: 255, name: 'exception_type' })
  exceptionType: string | null;
}
