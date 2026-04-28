import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';
import { UserService } from '../user/user.service';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  async register(createUserDto: any) {
    const user = await this.userService.create(createUserDto);
    return this.login(user);
  }

  async googleLogin(token: string) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (!payload) throw new UnauthorizedException('Invalid Google token');
      
      const { email, name, sub } = payload;
      if (!email) throw new UnauthorizedException('Email not provided by Google');

      let user: any = await this.userService.findByEmail(email);

      if (!user) {
        // Create user if doesn't exist
        user = await this.userService.create({
          email,
          name: name || email.split('@')[0],
          password: await bcrypt.hash(sub, 10), // Random pass for social users
          role: 'user',
        });
      }

      return this.login(user);
    } catch (error) {
      throw new UnauthorizedException('Google authentication failed');
    }
  }
}
