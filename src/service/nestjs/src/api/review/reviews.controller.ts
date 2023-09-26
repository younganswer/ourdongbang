import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Patch,
	Query,
	HttpException,
	HttpStatus,
	NotFoundException,
} from '@nestjs/common';
import {
	ApiTags,
	ApiOperation,
	ApiResponse,
	ApiBadRequestResponse,
	ApiBody,
	ApiQuery,
	ApiParam,
	ApiNotFoundResponse,
	PartialType,
} from '@nestjs/swagger';
import { CreateReviewDTO } from './dto/request/createReview.dto';
import { ReviewsService } from './reviews.service';

@ApiTags('review API')
@Controller('reviews')
export class ReviewsController {
	constructor(private readonly reveiwSerice: ReviewsService) {}

	// @Post(':cid/:uid')
	@Post()
	@ApiOperation({ summary: 'create a club review', description: 'review 생성' })
	@ApiBody({ type: CreateReviewDTO })
	// @ApiParam({ name: 'cid', description: 'Club ID' })
	// @ApiParam({ name: 'uid', description: 'User ID' })
	@ApiResponse({ status: 201, description: '업로드에 성공하였습니다' })
	@ApiResponse({ status: 404, description: '업로드에 실패하였습니다' })
	async create(
		@Body() createReivewDTO: CreateReviewDTO,
		// 그냥 Body로 id를 받아오면 안되나?
		// @Param('cid') clubId: string,
		// @Param('uid') userId: string,
	) {
		try {
			const promiseReview = this.reveiwSerice.create(createReivewDTO);
			if (!promiseReview) {
				throw new NotFoundException('review not found');
			}

			// //club의 reviews배열에 reviewId 추가
			// const clubId = (await promiseReview.then()).clubId; // 리뷰의 clubID 추출
			// const club = await this.clubsService.findOne(clubId); // clubId로 club을 찾음
			// if (!club) {
			// 	throw new NotFoundException('review not found');
			// }
			// club.reviews.push((await promiseReview.then())._id); // club의 reviews배열에 reviewId 추가
			// await this.clubsService.update(clubId, club); // club 업데이트

			return promiseReview;
		} catch (error) {
			throw new HttpException('업로드에 실패하였습니다', HttpStatus.BAD_REQUEST);
		}
	}
}
