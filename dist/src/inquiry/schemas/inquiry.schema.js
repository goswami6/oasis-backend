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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquirySchema = exports.Inquiry = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Inquiry = class Inquiry {
    name;
    email;
    phone;
    model;
    location;
    investment;
    businessBackground;
    status;
    aadharNumber;
    panNumber;
    siteVisitConsent;
    aadharFront;
    aadharBack;
    panImage;
    kycStatus;
    kycFeedback;
};
exports.Inquiry = Inquiry;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Inquiry.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Inquiry.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Inquiry.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Inquiry.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Inquiry.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Inquiry.prototype, "investment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Inquiry.prototype, "businessBackground", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['New', 'Contacted', 'Qualified', 'Closed'],
        default: 'New',
    }),
    __metadata("design:type", String)
], Inquiry.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Inquiry.prototype, "aadharNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Inquiry.prototype, "panNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Inquiry.prototype, "siteVisitConsent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Inquiry.prototype, "aadharFront", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Inquiry.prototype, "aadharBack", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Inquiry.prototype, "panImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    }),
    __metadata("design:type", String)
], Inquiry.prototype, "kycStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Inquiry.prototype, "kycFeedback", void 0);
exports.Inquiry = Inquiry = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Inquiry);
exports.InquirySchema = mongoose_1.SchemaFactory.createForClass(Inquiry);
//# sourceMappingURL=inquiry.schema.js.map