import {TypeOrmModule} from "@nestjs/typeorm";
import { Details } from "src/entities/details.entity";
import { Sales } from "src/entities/sales.entity";
import { User } from "src/entities/user.entity";

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ith-db',
    entities: [User, Sales, Details],
    synchronize: true
})