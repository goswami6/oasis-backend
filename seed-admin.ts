import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

import * as dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/oasis";

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UserSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, default: 'user' },
      name: { type: String }
    });

    const User = mongoose.model('User', UserSchema);

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
  } catch (err) {
    console.error('Error seeding admin:', err);
    process.exit(1);
  }
}

seed();
