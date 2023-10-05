import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'common/database/schema/user.schema';
import * as bcrypt from 'bcrypt';
import * as AuthDto from '../dto/index';

@Injectable()
export class LoginService {
	constructor(@InjectModel('User') private userModel: Model<User>) {}

	async login(
		social: string | undefined,
		loginRequestDto: Partial<AuthDto.Request.Login>,
	): Promise<User> {
		try {
			if (!social) {
				return await this.commonLogin(loginRequestDto);
			}
			return await this.socialLogin(social, loginRequestDto);
		} catch (error) {
			throw new Error(error);
		}
	}

	async commonLogin(loginRequestDto: Partial<AuthDto.Request.Login>): Promise<User> {
		try {
			if (!loginRequestDto.id || !loginRequestDto.password) {
				throw new Error('ID or password is incorrect');
			}

			const user = await this.userModel.findOne({ id: loginRequestDto.id });
			if (!user) {
				throw new Error('ID or password is incorrect');
			}

			const isValid = await bcrypt.compare(loginRequestDto.password, user.password);
			if (!isValid) {
				throw new Error('ID or password is incorrect');
			}

			return user;
		} catch (error) {
			throw new Error(error);
		}
	}

	async socialLogin(
		social: string,
		loginRequestDto: Partial<AuthDto.Request.Login>,
	): Promise<User> {
		try {
			if (social === 'google') {
				return await this.googleLogin(loginRequestDto);
			}
			throw new Error('Bad request');
		} catch (error) {
			throw new Error(error);
		}
	}

	async googleLogin(loginRequestDto: Partial<AuthDto.Request.Login>): Promise<User> {
		try {
			const { email } = loginRequestDto;

			if (!email) {
				throw new Error('Bad request');
			}

			const user = this.userModel.findOne({ email });
			if (!user) {
				throw new Error('Bad request');
			}

			return user;
		} catch (error) {
			throw new Error(error);
		}
	}
}
