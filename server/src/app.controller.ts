import {
  Controller,
  Get,
  UploadedFile,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { Express } from 'express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          console.log('file : ', file);
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('file : ', file);
    return 'ok';
  }
}
