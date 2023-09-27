import { Module } from '@nestjs/common';
import { ClubsService } from './service/clubs.service';
import { ClubsController } from './clubs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubSchema, Review, ReviewSchema, ScheduleSchema } from 'common/database/schema';
import { ScheduleService } from './service';
import { ReviewsService } from './service/reviews.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Club', schema: ClubSchema },
			{ name: 'Schedule', schema: ScheduleSchema },
			{ name: Review.name, schema: ReviewSchema },
		]),
	],
	controllers: [ClubsController],
	providers: [ClubsService, ScheduleService, ReviewsService],
})
export class ClubsModule {}
