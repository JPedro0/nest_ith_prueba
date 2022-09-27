import { userModel } from './../../../models/user.models';
import { Controller, Body, Get, Post, Param } from '@nestjs/common';


@Controller('user')
export class UserController {

    constructor(){
        
    }

    @Post()
    Create(@Body() params: userModel):void{
        console.log("Nombre: " + params.name);
        console.log("Correo: " + params.email);
        console.log("Telefono: " + params.phone);
    }

    @Get()
    getUser(): string{
        return 'Jesus'
    }
}

