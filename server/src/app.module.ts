import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FilesService } from './api/files/files.service';
import { FilesController } from './api/files/files.controller';
import { FilesModule } from './api/files/files.module';
@Module({
  imports: [ConfigModule.forRoot(), MulterModule, HttpModule, FilesModule],
  controllers: [AppController, FilesController],
  providers: [AppService, FilesService],
})
export class AppModule {}
