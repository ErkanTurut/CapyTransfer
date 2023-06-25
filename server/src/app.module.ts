import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FilesService } from './api/files/files.service';
import { FilesController } from './api/files/files.controller';
import { FilesModule } from './api/files/files.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [ConfigModule.forRoot(), MulterModule, HttpModule, FilesModule, UsersModule, AuthModule],
  controllers: [AppController, FilesController],
  providers: [AppService, FilesService],
})
export class AppModule {}
