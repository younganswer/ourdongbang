import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from 'common/database/schema/review.schema';
import { Model } from 'mongoose';
import { CreateReviewDTO } from '../dto/request/createReview.dto';

@Injectable()
export class ReviewsService {
	constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) {}

	async create(createReviewDto: CreateReviewDTO): Promise<Review> {
		try {
			return await this.reviewModel.create(createReviewDto);
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}
