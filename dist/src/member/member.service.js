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
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const member_schema_1 = require("./member.schema");
const user_service_1 = require("../user/user.service");
let MemberService = class MemberService {
    memberModel;
    userService;
    constructor(memberModel, userService) {
        this.memberModel = memberModel;
        this.userService = userService;
    }
    async apply(data) {
        const newMember = new this.memberModel(data);
        return newMember.save();
    }
    async findAll() {
        return this.memberModel.find().sort({ createdAt: -1 }).exec();
    }
    async updateStatus(id, status) {
        const member = await this.memberModel.findByIdAndUpdate(id, { status }, { new: true });
        if (member && status === 'Active' && member.userId) {
            const tokenAmount = Math.floor(member.amount * 0.05);
            await this.userService.addWalletBalance(member.userId.toString(), tokenAmount);
        }
        return member;
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(member_schema_1.Member.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], MemberService);
//# sourceMappingURL=member.service.js.map