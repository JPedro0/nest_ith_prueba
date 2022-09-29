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
}