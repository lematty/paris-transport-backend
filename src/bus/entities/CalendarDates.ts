import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Calendar} from "./Calendar";


@Entity("calendar_dates",{schema:"public" } )
export class CalendarDates {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"calendar_date_id"
        })
    calendarDateId:number;
        

   
    @ManyToOne(type=>Calendar, calendar=>calendar.calendarDatess,{  })
    @JoinColumn({ name:'service_id'})
    service:Calendar | null;


    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"date"
        })
    date:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"exception_type"
        })
    exceptionType:number | null;
        
}
