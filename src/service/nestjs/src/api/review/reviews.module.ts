import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from 'common/database/schema/review.schema';
import { ClubsService } from 'api/club/clubs.service';
import { ClubsModule } from 'api/club/clubs.module';
import { Club } from 'common/database/schema/club.schema';
import { ClubsController } from 'api/club/clubs.controller';

@Module({
	imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])],
	providers: [ReviewsService],
	controllers: [ReviewsController],
})
export class ReviewsModule {}
