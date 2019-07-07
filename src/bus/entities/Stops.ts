import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {StopTimes} from "./StopTimes";
import {Transfers} from "./Transfers";


@Entity("stops",{schema:"public" } )
export class Stops {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"stop_id"
        })
    stopId:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"stop_code"
        })
    stopCode:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"stop_name"
        })
    stopName:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"stop_desc"
        })
    stopDesc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"stop_lat"
        })
    stopLat:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"stop_lon"
        })
    stopLon:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"location_type"
        })
    locationType:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"parent_station"
        })
    parentStation:string | null;
        

   
    @OneToMany(type=>StopTimes, stop_times=>stop_times.stop)
    stopTimess:StopTimes[];
    

   
    @OneToMany(type=>Transfers, transfers=>transfers.fromStop)
    transferss:Transfers[];
    

   
    @OneToMany(type=>Transfers, transfers=>transfers.toStop)
    transferss2:Transfers[];
    
}
