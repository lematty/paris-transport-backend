import { Column, Entity } from 'typeorm';

@Entity('agency', { schema: 'public' } )
export class Agency {

  @Column({ primary: true, nullable: true, length: 255, name:  'agency_id' })
  agencyId: string | null;

  @Column({ nullable:  true, length:  255, name: 'agency_name' })
  agencyName: string | null;

  @Column({ nullable: true, length: 255, name: 'agency_url' })
  agencyUrl: string | null;

  @Column({ nullable: true, length: 255, name: 'agency_timezone' })
  agencyTimezone: string | null;

  @Column({ nullable: true, length: 255, name: 'agency_lang' })
  agencyLang: string | null;

  @Column({ nullable: true, length: 255, name: 'agency_phone' })
  agencyPhone: string | null;
}
