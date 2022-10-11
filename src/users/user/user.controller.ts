import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/models/user.models';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(private userService : UserService ){

    }

    @Post()
    Create(@Body() params : User ):void{
        this.userService.create(params)
    }

    @Get('/all')
    getUsers(): User[] {
        return this.userService.getAll()
    }

    @Get('/:correo')
    getUser(@Param('correo') param) : User | string{
        const user = this.userService.getByEmail(param)
        return user ?? "El usuario no existe"
    }

    @Put('/update/:id')
    actualizartUsuario(@Body() user : User, @Param('id') id){
        return this.userService.updateUserById(Number(id), user)
    }
}