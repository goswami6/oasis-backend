/// <reference types="multer" />
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { InquiryService } from './inquiry.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('inquiry')
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'aadharFront', maxCount: 1 },
        { name: 'aadharBack', maxCount: 1 },
        { name: 'panImage', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads/kyc',
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
          },
        }),
      },
    ),
  )
  async create(
    @Body() createInquiryDto: any,
    @UploadedFiles()
    files: {
      aadharFront?: Express.Multer.File[];
      aadharBack?: Express.Multer.File[];
      panImage?: Express.Multer.File[];
    },
  ) {
    try {
      const dto = { ...createInquiryDto };
      if (files?.aadharFront) dto.aadharFront = files.aadharFront[0].path;
      if (files?.aadharBack) dto.aadharBack = files.aadharBack[0].path;
      if (files?.panImage) dto.panImage = files.panImage[0].path;

      const data = await this.inquiryService.create(dto);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.inquiryService.findAll();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.inquiryService.findOne(id);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    try {
      const data = await this.inquiryService.updateStatus(id, status);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Patch(':id/kyc-status')
  async updateKycStatus(
    @Param('id') id: string,
    @Body('kycStatus') kycStatus: string,
    @Body('kycFeedback') kycFeedback?: string,
  ) {
    try {
      const data = await this.inquiryService.updateKycStatus(id, kycStatus, kycFeedback);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.inquiryService.remove(id);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
