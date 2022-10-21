import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Details } from 'src/entities/details.entity';
import { Sales } from 'src/entities/sales.entity';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
    imports: [TypeOrmModule.forFeature([Sales, Details])],
    providers: [SalesService], //servicio para las consultas a la BD
    controllers: [SalesController],
    exports: [TypeOrmModule]
})
export class SalesModule {}