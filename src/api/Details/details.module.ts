import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Details } from 'src/entities/details.entity';
import { DetailsController } from './details.controller';
import { DetailsService } from './details.service';

@Module({
    imports: [TypeOrmModule.forFeature([Details])],
    providers: [DetailsService], //servicio para las consultas a la BD
    controllers: [DetailsController],
    exports: [TypeOrmModule]
})
export class DetailsModule {}