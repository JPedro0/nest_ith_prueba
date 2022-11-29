import { DetailsService } from './details.service';
import { Controller, Get, Param } from '@nestjs/common';

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