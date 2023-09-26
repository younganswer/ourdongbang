import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from 'common/database/schema/review.schema';
import { Model } from 'mongoose';
import { CreateReviewDTO } from '../dto/request/createReview.dto';
import { ClubsService } from 'api/club/clubs.service';

@Injectable()
export class ReviewsService {
	constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) {}

	async create(createReviewDto: CreateReviewDTO): Promise<Review> {
		const createdReview = new this.reviewModel(createReviewDto);
		return createdReview.save();
	}
}
