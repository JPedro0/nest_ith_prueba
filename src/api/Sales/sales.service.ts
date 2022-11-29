import { Sales } from 'src/entities/sales.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ISales } from 'src/models/sales.models';
import { DetailsService } from '../Details/details.service';

@Injectable()
export class SalesService {
    constructor( 
        @InjectRepository(Sales) 
        private salesEntity : Repository< Sales >,
        private detailsService : DetailsService 
            )
        {
            //Constructor
    }

    async create( sale : ISales ){
        const date = new Date();
        let total = 0;

        sale.details.forEach(item =>{
            total = total + ( item.quantity * item.unit_price )
        })

        const response = await this.salesEntity.save({
            id_user:sale.id_user,
            date: date,
            total
        })
        
        await this.detailsService.createDetails(response.id, sale.details)
    }
    

    async getAll() {
        return await this.salesEntity.find();
    }

    async getByID(id : number) {
        return await this.salesEntity.find( {
            where: {
                id : id
            }
        } )
    }

}