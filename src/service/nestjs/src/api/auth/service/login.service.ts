import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'common/database/schema/user.schema';
import { Model } from 'mongoose';
import { LoginRequestDto } from '../dto/request/login.dto';

@Injectable()
export class LoginService {
	constructor(@InjectModel('User') private userModel: Model<User>) {}

	async login(loginRequestDto: LoginRequestDto) {
		try {
			const user = await this.userModel.findOne({ id: loginRequestDto.id });

			if (!user) {
				throw new Error('ID or password is incorrect');
			}
			return user;
		} catch (error) {
			throw new Error(error);
		}
	}
}
