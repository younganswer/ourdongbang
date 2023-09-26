import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Schedule } from 'common/database/schema/schedule.schema';
import { Model } from 'mongoose';
import { CreateScheduleDto } from '../dto/request/schedule.dto';

@Injectable()
export class ScheduleService {
	constructor(@InjectModel('Schedule') private readonly scheduleModel: Model<Schedule>) {}

	async createSchedule(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
		try {
			return await this.scheduleModel.create(createScheduleDto);
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}
