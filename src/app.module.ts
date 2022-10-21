import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/Users/user/user.module';
import { SalesModule } from './api/Sales/sales.module';
import { Connection } from './configs/DBConnections';
import { DetailsModule } from './api/Details/details.module';

@Module({
  imports: [Connection, UserModule, SalesModule, DetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}