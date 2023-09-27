import { Module } from '@nestjs/common';
import { ClubsService } from './service/clubs.service';
import { ClubsController } from './clubs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
	Audit,
	AuditSchema,
	ClubSchema,
	Member,
	MemberSchema,
	Review,
	ReviewSchema,
	ScheduleSchema,
} from 'common/database/schema';
import { AuditService, ScheduleService } from './service';
import { ReviewsService } from './service/reviews.service';
import { MemberService } from './service/member.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Club', schema: ClubSchema },
			{ name: 'Schedule', schema: ScheduleSchema },
			{ name: Review.name, schema: ReviewSchema },
			{ name: Member.name, schema: MemberSchema },
			{ name: Audit.name, schema: AuditSchema },
		]),
	],
	controllers: [ClubsController],
	providers: [ClubsService, ScheduleService, ReviewsService, MemberService, AuditService],
})
export class ClubsModule {}
