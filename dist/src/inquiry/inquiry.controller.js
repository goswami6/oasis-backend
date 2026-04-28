"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryController = void 0;
const common_1 = require("@nestjs/common");
const inquiry_service_1 = require("./inquiry.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let InquiryController = class InquiryController {
    inquiryService;
    constructor(inquiryService) {
        this.inquiryService = inquiryService;
    }
    async create(createInquiryDto, files) {
        try {
            const dto = { ...createInquiryDto };
            if (files?.aadharFront)
                dto.aadharFront = files.aadharFront[0].path;
            if (files?.aadharBack)
                dto.aadharBack = files.aadharBack[0].path;
            if (files?.panImage)
                dto.panImage = files.panImage[0].path;
            const data = await this.inquiryService.create(dto);
            return { success: true, data };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async findAll() {
        try {
            const data = await this.inquiryService.findAll();
            return { success: true, data };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async findOne(id) {
        try {
            const data = await this.inquiryService.findOne(id);
            return { success: true, data };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async updateStatus(id, status) {
        try {
            const data = await this.inquiryService.updateStatus(id, status);
            return { success: true, data };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async updateKycStatus(id, kycStatus, kycFeedback) {
        try {
            const data = await this.inquiryService.updateKycStatus(id, kycStatus, kycFeedback);
            return { success: true, data };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async remove(id) {
        try {
            await this.inquiryService.remove(id);
            return { success: true };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
};
exports.InquiryController = InquiryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'aadharFront', maxCount: 1 },
        { name: 'aadharBack', maxCount: 1 },
        { name: 'panImage', maxCount: 1 },
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/kyc',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InquiryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InquiryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InquiryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], InquiryController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)(':id/kyc-status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('kycStatus')),
    __param(2, (0, common_1.Body)('kycFeedback')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], InquiryController.prototype, "updateKycStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InquiryController.prototype, "remove", null);
exports.InquiryController = InquiryController = __decorate([
    (0, common_1.Controller)('inquiry'),
    __metadata("design:paramtypes", [inquiry_service_1.InquiryService])
], InquiryController);
//# sourceMappingURL=inquiry.controller.js.map