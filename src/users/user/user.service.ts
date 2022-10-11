import { Injectable } from "@nestjs/common";
import { User } from 'src/models/user.models';

@Injectable()
export class UserService{
    private readonly Users: User[] = []

    create(user : User) : void{
        this.Users.push(user);
    }

    getAll() : User[]{
        return this.Users;
    }

    getByEmail(correo : string) : User{
        return  this.Users.find( (user) => user.email === correo)
    }

    updateUserById(id : number, user : User) : boolean {
        let user_index = this.Users.findIndex( (user) => user.id === id )
        if(user_index !== -1 ){
            //mantener los datos que no se van a actualizar

            var nombre, telefono, correo;

            if(user.name == null){
                nombre = this.Users[user_index].name
            }
            else{
                nombre = user.name
            }

            if(user.email == null){
                correo = this.Users[user_index].email
            }
            else{
                correo = user.email
            }

            if(user.phone == null){
                telefono = this.Users[user_index].phone
            }
            else{
                telefono = user.phone
            }

            this.Users[user_index] = {
                id : this.Users[user_index].id,
                name : nombre,
                email : correo,
                phone : telefono
            }
            return true
        }
        return false
    }
}