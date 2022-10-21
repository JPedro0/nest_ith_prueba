import { User } from './../../../models/user.models';
import { User as UserEntity } from '../../../entities/user.entity' 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userEntity : Repository<UserEntity>
    ){ 
        //constructor
    }

    async create( user : User ){
        // this.Users.push(user)
        return await this.userEntity.save(user);
    }

    async getAll() {
        return await this.userEntity.find();
    }

    async getByEmail(correo : string) {
        return await this.userEntity.find( {
            where: {
                correo : correo
            }
        } )
    }

    /*async updateUserById(id : number, user : User) {
        const entidad : User = await this.userEntity.find({
            where:{
                id : id
            }
        })

        if (entidad != null){
            const new_user = Object.assign(user, entidad)

            console.log(new_user)
            this.userEntity.update({
                id : new_user.id
            },{
                nombre : new_user.nombre,
                telefono : new_user.telefono,
                correo : new_user.correo,
                ciudad : new_user.ciudad
            })
            return true
        }
        /*let user_index = this.Users.findIndex( (user) => user.id === id )
        if( this.userExists(id) ){
            //mantener los datos que no se van a actualizar
            const new_user = Object.assign(this.Users[user_index], user)
            this.Users[user_index] = new_user
            return true
        }
        return false
    }

    
    /**
     * @description Esta funcion verifica si un usuario existe o no.
     * @param id id del usuario que queremos verificar si existe
     * @returns true si el usuario existe o false si no existe
     * 
    userExists(id : number) : boolean{
        const index = this.Users.findIndex( usuario => usuario.id === id)
        return index !== -1
    }*/
}
    