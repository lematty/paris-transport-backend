import { Column, Entity } from 'typeorm';

@Entity('routes', {schema: 'public' } )
export class Route {

  @Column({ nullable: true, length: 255, name: 'route_id' })
  routeId: string | null;

  @Column({ nullable: true, length: 255, name: 'agency_id' })
  agencyId: string | null;

  @Column({ nullable: true, length: 31, name: 'route_short_name' })
  routeShortName: string | null;

  @Column({ nullable: true, length: 255, name: 'route_long_name' })
  routeLongName: string | null;

  @Column({ nullable: true, length: 255, name: 'route_desc' })
  routeDesc: string | null;

  @Column({ nullable: true, length: 255, name: 'route_type' })
  routeType: string | null;

  @Column({ nullable: true, length: 255, name: 'route_url' })
  routeUrl: string | null;

  @Column({ nullable: true, length: 15, name: 'route_color' })
  routeColor: string | null;

  @Column({ nullable: true, length: 15, name: 'route_text_color' })
  routeTextColor: string | null;
}
