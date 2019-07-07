import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {CalendarDates} from "./CalendarDates";


@Entity("calendar",{schema:"public" } )
export class Calendar {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"service_id"
        })
    serviceId:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"monday"
        })
    monday:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"tuesday"
        })
    tuesday:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"wednesday"
        })
    wednesday:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"thursday"
        })
    thursday:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"friday"
        })
    friday:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"saturday"
        })
    saturday:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"sunday"
        })
    sunday:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"start_date"
        })
    startDate:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"end_date"
        })
    endDate:string | null;
        

   
    @OneToMany(type=>CalendarDates, calendar_dates=>calendar_dates.service)
    calendarDatess:CalendarDates[];
    
}
