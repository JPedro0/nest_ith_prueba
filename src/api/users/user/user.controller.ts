import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/models/user.models';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService ){
    }

    private readonly parametro : User
    @Post()
    Create(@Body() params : User ): string | boolean{
        try {
            this.userService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
    }
    @Get('/all')
    getUsers() {
        return this.userService.getAll()
    }

    @Get('/:correo')
    getUser(@Param('correo') param) {
        const user = this.userService.getByEmail(param)
        if (user == null)
        {
            return "El usuario no existe"
        }
        else{
            return user
        }
    }
    /*@Put('/update/:id')
    actualizartUsuario(@Body() user : User, @Param('id') id){
        return this.userService.updateUserById(Number(id), user)
    }*/
}