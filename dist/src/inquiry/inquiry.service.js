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
exports.InquiryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const inquiry_schema_1 = require("./schemas/inquiry.schema");
let InquiryService = class InquiryService {
    inquiryModel;
    constructor(inquiryModel) {
        this.inquiryModel = inquiryModel;
    }
    async create(createInquiryDto) {
        const createdInquiry = new this.inquiryModel(createInquiryDto);
        return createdInquiry.save();
    }
    async findAll() {
        return this.inquiryModel.find().sort({ createdAt: -1 }).exec();
    }
    async updateStatus(id, status) {
        return this.inquiryModel
            .findByIdAndUpdate(id, { status }, { new: true })
            .exec();
    }
    async updateKycStatus(id, kycStatus, kycFeedback) {
        return this.inquiryModel
            .findByIdAndUpdate(id, { kycStatus, kycFeedback }, { new: true })
            .exec();
    }
    async findOne(id) {
        return this.inquiryModel.findById(id).exec();
    }
    async remove(id) {
        return this.inquiryModel.findByIdAndDelete(id).exec();
    }
};
exports.InquiryService = InquiryService;
exports.InquiryService = InquiryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(inquiry_schema_1.Inquiry.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InquiryService);
//# sourceMappingURL=inquiry.service.js.map