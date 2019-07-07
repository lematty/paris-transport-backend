import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Trips} from "./Trips";


@Entity("routes",{schema:"public" } )
export class Routes {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"route_id"
        })
    routeId:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"agency_id"
        })
    agencyId:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"route_short_name"
        })
    routeShortName:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"route_long_name"
        })
    routeLongName:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"route_desc"
        })
    routeDesc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"route_type"
        })
    routeType:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"route_url"
        })
    routeUrl:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"route_color"
        })
    routeColor:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"route_text_color"
        })
    routeTextColor:string | null;
        

   
    @OneToMany(type=>Trips, trips=>trips.route)
    tripss:Trips[];
    
}
