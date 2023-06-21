import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FilesService {
  fileHandler(file: Express.Multer.File) {
    Logger.log('fileHandler' + file);

    return 'ok';
  }
}
