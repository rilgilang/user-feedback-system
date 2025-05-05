import path from 'path';

// file-uploader.service.ts
export interface FileUploaderService {
  upload(
    file: Express.Multer.File,
  ): Promise<{ filename: string; path: string }>;
}

export class LocalFileUploaderService implements FileUploaderService {
  async upload(file: Express.Multer.File) {
    return {
      filename: file.filename,
      path: file.path,
    };
  }
}
