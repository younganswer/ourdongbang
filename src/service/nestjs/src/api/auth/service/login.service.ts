import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'common/database/schema/user.schema';
import * as bcrypt from 'bcrypt';
import * as AuthDto from '../dto/index';

@Injectable()
export class LoginService {
	constructor(@InjectModel('User') private userModel: Model<User>) {}

	async login(loginRequestDto: AuthDto.Request.Login): Promise<User> {
		try {
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
}
