import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Stops} from "./Stops";


@Entity("transfers",{schema:"public" } )
export class Transfers {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"transfer_id"
        })
    transferId:number;
        

   
    @ManyToOne(type=>Stops, stops=>stops.transferss,{  })
    @JoinColumn({ name:'from_stop_id'})
    fromStop:Stops | null;


   
    @ManyToOne(type=>Stops, stops=>stops.transferss2,{  })
    @JoinColumn({ name:'to_stop_id'})
    toStop:Stops | null;


    @Column("integer",{ 
        nullable:true,
        name:"transfer_type"
        })
    transferType:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"min_transfer_time"
        })
    minTransferTime:number | null;
        
}
