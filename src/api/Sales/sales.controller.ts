import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ISales } from 'src/models/sales.models';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor( private salesService : SalesService ){
    }

    @Post()
    Create(@Body() params : ISales ){
        try {
            return this.salesService.create(params)
        } catch (error) {
            console.log(error)
        }
    }

    @Get('/all')
    getSales() {
        return this.salesService.getAll()
    }

    @Get('/:id')
    getSalesID(@Param('id') param) {
        const sal = this.salesService.getByID(param)
        if (sal == null)
        {
            return "El usuario no existe"
        }
        else{
            return sal
        }
    }
}