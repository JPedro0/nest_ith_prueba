import { DetailsService } from './details.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IDetails } from 'src/models/sales.models';

    @Controller('details')
export class DetailsController {
    constructor( private detailsService : DetailsService ){
    }

    @Get('/all')
    getSales() {
        return this.detailsService.getAll()
    }

    @Get('/:id')
    getSalesID(@Param('id') param) {
        const sal = this.detailsService.getByID(param)
        if (sal == null)
        {
            return "El usuario no existe"
        }
        else{
            return sal
        }
    }
}