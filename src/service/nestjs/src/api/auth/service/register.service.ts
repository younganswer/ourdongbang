import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'common/database/schema/user.schema';
import { Model } from 'mongoose';
import { RegisterRequestDto } from '../dto/request/register.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class RegisterService {
	constructor(@InjectModel('User') private userModel: Model<User>) {}

	async register(registerRequestDto: RegisterRequestDto) {
		try {
			const { id } = registerRequestDto;
			let user = await this.userModel.findOne({ id });

			if (user) {
				throw new Error('ID already exists');
			}

			const salt = await genSalt();
			const hashedPassword = await hash(registerRequestDto.password, salt);

			registerRequestDto['salt'] = salt;
			registerRequestDto.password = hashedPassword;
			user = await new this.userModel(registerRequestDto).save();
			return user;
		} catch (error) {
			throw new Error(error);
		}
	}
}
