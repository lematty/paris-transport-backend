import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Routes} from "./Routes";
import {StopTimes} from "./StopTimes";


@Entity("trips",{schema:"public" } )
export class Trips {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"trip_id"
        })
    tripId:string;
        

   
    @ManyToOne(type=>Routes, routes=>routes.tripss,{  })
    @JoinColumn({ name:'route_id'})
    route:Routes | null;


    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"service_id"
        })
    serviceId:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"trip_headsign"
        })
    tripHeadsign:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"trip_short_name"
        })
    tripShortName:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"direction_id"
        })
    directionId:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"shape_id"
        })
    shapeId:string | null;
        

   
    @OneToMany(type=>StopTimes, stop_times=>stop_times.trip)
    stopTimess:StopTimes[];
    
}
