import { Column, Entity, Index, OneToMany } from "typeorm";
import { CalendarDates } from "./CalendarDates";
import { Trips } from "./Trips";

@Index("calendar_pkey", ["serviceId"], { unique: true })
@Entity("calendar", { schema: "public" })
export class Calendar {
  @Column("character varying", {
    primary: true,
    name: "service_id",
    length: 255,
  })
  serviceId: string;

  @Column("integer", { name: "monday", nullable: true })
  monday: number | null;

  @Column("integer", { name: "tuesday", nullable: true })
  tuesday: number | null;

  @Column("integer", { name: "wednesday", nullable: true })
  wednesday: number | null;

  @Column("integer", { name: "thursday", nullable: true })
  thursday: number | null;

  @Column("integer", { name: "friday", nullable: true })
  friday: number | null;

  @Column("integer", { name: "saturday", nullable: true })
  saturday: number | null;

  @Column("integer", { name: "sunday", nullable: true })
  sunday: number | null;

  @Column("character varying", {
    name: "start_date",
    nullable: true,
    length: 8,
  })
  startDate: string | null;

  @Column("character varying", { name: "end_date", nullable: true, length: 8 })
  endDate: string | null;

  @OneToMany(() => CalendarDates, (calendarDates) => calendarDates.service)
  calendarDates: CalendarDates[];

  @OneToMany(() => Trips, (trips) => trips.service)
  trips: Trips[];
}
