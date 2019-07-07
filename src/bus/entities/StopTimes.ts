import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Trips} from "./Trips";
import {Stops} from "./Stops";


@Entity("stop_times",{schema:"public" } )
export class StopTimes {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"stop_time_id"
        })
    stopTimeId:number;
        

   
    @ManyToOne(type=>Trips, trips=>trips.stopTimess,{  })
    @JoinColumn({ name:'trip_id'})
    trip:Trips | null;


    @Column("character varying",{ 
        nullable:true,
        length:63,
        name:"arrival_time"
        })
    arrivalTime:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:63,
        name:"departure_time"
        })
    departureTime:string | null;
        

   
    @ManyToOne(type=>Stops, stops=>stops.stopTimess,{  })
    @JoinColumn({ name:'stop_id'})
    stop:Stops | null;


    @Column("integer",{ 
        nullable:true,
        name:"stop_sequence"
        })
    stopSequence:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"stop_headsign"
        })
    stopHeadsign:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"shape_dist_traveled"
        })
    shapeDistTraveled:string | null;
        
}
