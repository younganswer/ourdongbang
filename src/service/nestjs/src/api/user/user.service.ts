import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'common/database/schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
	constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

	async updateMe(userId: string, updateData: Partial<User>): Promise<User> {
		try {
			return await this.userModel.findByIdAndUpdate(userId, updateData, { new: true });
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	async findByObjectId(_id: string): Promise<User> {
		try {
			return await this.userModel.findById(_id);
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	async findByEmail(email: string): Promise<User> {
		try {
			return await this.userModel.findOne({ email });
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}
