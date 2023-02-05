import { Column, Entity, Index, OneToMany } from "typeorm";
import { Routes } from "./Routes";

@Index("agency_pkey", ["agencyId"], { unique: true })
@Entity("agency", { schema: "public" })
export class Agency {
  @Column("character varying", {
    primary: true,
    name: "agency_id",
    length: 255,
  })
  agencyId: string;

  @Column("character varying", {
    name: "agency_name",
    nullable: true,
    length: 255,
  })
  agencyName: string | null;

  @Column("character varying", {
    name: "agency_url",
    nullable: true,
    length: 255,
  })
  agencyUrl: string | null;

  @Column("character varying", {
    name: "agency_timezone",
    nullable: true,
    length: 15,
  })
  agencyTimezone: string | null;

  @Column("character varying", {
    name: "agency_lang",
    nullable: true,
    length: 4,
  })
  agencyLang: string | null;

  @Column("character varying", {
    name: "agency_phone",
    nullable: true,
    length: 15,
  })
  agencyPhone: string | null;

  @Column("character varying", {
    name: "agency_email",
    nullable: true,
    length: 15,
  })
  agencyEmail: string | null;

  @OneToMany(() => Routes, (routes) => routes.agency)
  routes: Routes[];
}
