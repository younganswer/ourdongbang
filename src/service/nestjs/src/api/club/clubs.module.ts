import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubSchema, ScheduleSchema } from 'common/database/schema';
import { ScheduleService } from './service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Club', schema: ClubSchema },
			{ name: 'Schedule', schema: ScheduleSchema },
		]),
	],
	controllers: [ClubsController],
	providers: [ClubsService, ScheduleService],
})
export class ClubsModule {}
