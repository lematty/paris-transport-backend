import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Calendar } from "./Calendar";

@Index("calendar_dates_pkey", ["calendarDateId"], { unique: true })
@Entity("calendar_dates", { schema: "public" })
export class CalendarDates {
  @PrimaryGeneratedColumn({ type: "integer", name: "calendar_date_id" })
  calendarDateId: number;

  @Column("character varying", { name: "date", nullable: true, length: 8 })
  date: string | null;

  @Column("integer", { name: "exception_type", nullable: true })
  exceptionType: number | null;

  @ManyToOne(() => Calendar, (calendar) => calendar.calendarDates)
  @JoinColumn([{ name: "service_id", referencedColumnName: "serviceId" }])
  service: Calendar;
}
