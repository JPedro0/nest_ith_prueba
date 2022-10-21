import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Details } from 'src/entities/details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {

    constructor( 
        @InjectRepository(Details) 
        private detailsEntity : Repository< Details > 
            )
        {
            //Constructor
    }

    async getAll() {
        return await this.detailsEntity.find();
    }

    async getByID(id : number) {
        return await this.detailsEntity.find( {
            where: {
                id : id
            }
        } )
    }

}
