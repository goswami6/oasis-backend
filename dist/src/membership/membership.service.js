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
exports.MembershipService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const membership_schema_1 = require("./membership.schema");
let MembershipService = class MembershipService {
    membershipModel;
    constructor(membershipModel) {
        this.membershipModel = membershipModel;
    }
    async onModuleInit() {
        const count = await this.membershipModel.countDocuments();
        if (count === 0) {
            await this.membershipModel.create([
                {
                    tier: 'Silver',
                    tag: 'Essential Status',
                    amount: 5000,
                    perks: ['Basic discounts', 'Café credits', 'Standard access'],
                    glow: 'hover:shadow-[0_0_40px_rgba(148,163,184,0.15)]',
                    border: 'border-slate-400/20',
                    featured: false,
                },
                {
                    tier: 'Gold',
                    tag: 'Priority Status',
                    amount: 15000,
                    perks: ['Extra benefits', 'Priority booking', 'Meeting room credits'],
                    glow: 'hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]',
                    border: 'border-accent-gold/30',
                    featured: true,
                },
                {
                    tier: 'Platinum',
                    tag: 'Elite status',
                    amount: 50000,
                    perks: ['Premium rewards', 'Franchise priority', 'Equity benefits'],
                    glow: 'hover:shadow-[0_0_40px_rgba(123,227,214,0.15)]',
                    border: 'border-primary-mist/30',
                    featured: false,
                },
            ]);
        }
    }
    async findAll() {
        return this.membershipModel.find().exec();
    }
    async update(tier, updateData) {
        return this.membershipModel.findOneAndUpdate({ tier }, updateData, { new: true }).exec();
    }
};
exports.MembershipService = MembershipService;
exports.MembershipService = MembershipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(membership_schema_1.Membership.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MembershipService);
//# sourceMappingURL=membership.service.js.map