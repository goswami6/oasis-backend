"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt = __importStar(require("bcrypt"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/oasis";
async function seed() {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
        const UserSchema = new mongoose_1.default.Schema({
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            role: { type: String, default: 'user' },
            name: { type: String }
        });
        const User = mongoose_1.default.model('User', UserSchema);
        const existingAdmin = await User.findOne({ email: 'admin@oasis.com' });
        if (existingAdmin) {
            console.log('Admin already exists');
            process.exit(0);
        }
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const admin = new User({
            email: 'admin@oasis.com',
            password: hashedPassword,
            name: 'OASIS Admin',
            role: 'admin'
        });
        await admin.save();
        console.log('Admin user created successfully!');
        console.log('Email: admin@oasis.com');
        console.log('Password: admin123');
        process.exit(0);
    }
    catch (err) {
        console.error('Error seeding admin:', err);
        process.exit(1);
    }
}
seed();
//# sourceMappingURL=seed-admin.js.map