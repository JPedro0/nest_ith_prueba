import { Sales } from 'src/entities/sales.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Entity } from 'typeorm';
import { ISales } from 'src/models/sales.models';
import { Details } from 'src/entities/details.entity';

@Injectable()
export class SalesService {
    constructor( 
        @InjectRepository(Sales) 
        private salesEntity : Repository< Sales >,
        @InjectRepository(Details) 
        private detailsEntity : Repository< Details > 
            )
        {
            //Constructor
    }

    async create( sale : ISales ){
        const date = new Date();
        const details = new Details();
        let total = 0;

        sale.details.forEach(item =>{
            total = total + ( item.quantity * item.unit_price )
        })

        const newSale = await this.salesEntity.save({
            id_user:sale.id_user,
            date: date,
            total,
            }
        )
        
        sale.details.forEach(element => {
            details.product = element.product
            details.quantity = element.quantity
            details.unit_price = element.unit_price
            details.id_sale = newSale.id;
            this.detailsEntity.insert(
                {
                id_sale: details.id_sale,
                product: details.product,
                quantity: details.quantity,
                unit_price: details.unit_price
            }
            )
        }
        )
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