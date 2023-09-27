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
	UseGuards,
	Res,
} from '@nestjs/common';
import {
	ApiTags,
	ApiOperation,
	ApiResponse,
	ApiBadRequestResponse,
	ApiBody,
	ApiParam,
	ApiNotFoundResponse,
	PartialType,
} from '@nestjs/swagger';
import { Club } from 'common/database/schema/club.schema';
import { ClubsService } from './service/clubs.service';
import { CreateClubDTO } from './dto/request/createClub.dto';
import { JwtAuthGuard } from 'common/auth/guard';
import { Types } from 'mongoose';
import { ScheduleService } from './service';
import { Response } from 'express';
import { ReviewsService } from './service/reviews.service';
import { CreateReviewDTO } from './dto/request/createReview.dto';
import * as ClubDto from './dto/index';

@ApiTags('club API')
@Controller('club')
export class ClubsController {
	constructor(
		private readonly clubsService: ClubsService,
		private readonly scheduleService: ScheduleService,
		private readonly reveiwSerice: ReviewsService,
	) {}

	@Get()
	@ApiOperation({ summary: 'request all club', description: '모든 동아리 정보 가져오기' })
	@ApiResponse({ status: 200, description: 'get all club successfully', type: [Club] })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async findAll(): Promise<Club[]> {
		try {
			const clubs = await this.clubsService.findAll();

			if (!clubs) {
				throw new NotFoundException('Clubs not found');
			}

			return clubs;
		} catch (error) {
			throw new HttpException('Failed to retrieve clubs', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get('search')
	@ApiOperation({ summary: 'search club', description: '이름으로 동아리 검색' })
	@ApiResponse({ status: 200, description: 'Search club successfully', type: [Club] })
	@ApiBadRequestResponse({ description: 'Bad request' })
	@ApiNotFoundResponse({ description: 'not found' })
	async search(@Query('name') searchingName: string) {
		try {
			const clubs = await this.clubsService.searchByName(searchingName);

			if (!clubs || clubs.length === 0) {
				throw new NotFoundException('Clubs not found');
			}
			return clubs;
		} catch (error) {
			throw new HttpException('Failed to search clubs', HttpStatus.BAD_REQUEST);
		}
	}

	@Get(':id')
	@ApiOperation({ summary: 'get one club', description: '요청 id에 해당하는 club data 가져오기' })
	@ApiResponse({ status: 200, description: 'get one club data successfully', type: Club })
	@ApiBadRequestResponse({ description: 'Bad request' })
	@ApiNotFoundResponse({ description: 'not found' })
	async findOne(@Param('id') clubId: string) {
		try {
			const club = await this.clubsService.findOne(clubId);
			if (!club) {
				throw new NotFoundException('Club not found');
			}
			return club;
		} catch (error) {
			throw new HttpException('Failed to find a club', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Post()
	@ApiOperation({ summary: 'create a club', description: '동아리 생성' })
	@ApiBody({ type: CreateClubDTO })
	@ApiResponse({ status: 201, description: '업로드에 성공하였습니다' })
	@ApiResponse({ status: 404, description: '업로드에 실패하였습니다' })
	createClub(@Body() createClubDTO: CreateClubDTO) {
		try {
			const club = this.clubsService.create(createClubDTO);

			if (!club) {
				throw new HttpException('Bad request', 400);
			}

			return club;
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete a club', description: '동아리 삭제' })
	@ApiResponse({ status: 200, description: '동아리 삭제에 성공하였습니다' })
	@ApiParam({
		description: 'Club ID',
		name: 'id',
	})
	remove(@Param('id') clubId: string) {
		try {
			const deletedClub = this.clubsService.delete(clubId);
			if (!deletedClub) {
				throw new NotFoundException('Club not found');
			}
			return deletedClub;
		} catch (error) {
			throw new HttpException('Failed to delete a club', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update a club', description: '동아리 정보 수정' })
	@ApiResponse({ status: 200, description: '동아리 수정에 성공하였습니다' })
	@ApiParam({
		description: 'Club ID',
		name: 'id',
	})
	@ApiBody({
		type: PartialType<Club>,
		description: '수정할 동아리 정보',
	})
	async patch(@Param('id') clubId: string, @Body() updateData: Partial<Club>) {
		try {
			const updatedClub = await this.clubsService.update(clubId, updateData);
			if (!updatedClub) {
				throw new NotFoundException('Club not found');
			}
			return updatedClub;
		} catch (error) {
			throw new HttpException('Failed to update club', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Post('/:cid/schedule')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'create a schedule' })
	@ApiResponse({ status: 201, description: 'Schedule created successfully' })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async createSchdule(
		@Param('cid') clubId: string,
		@Body() createScheduleDto: ClubDto.Request.CreateScheduleDto,
		@Res({ passthrough: true }) response: Response,
	) {
		try {
			const schedule = await this.scheduleService.createSchedule(createScheduleDto);

			if (!schedule) {
				throw new HttpException('Bad request', 400);
			}

			const scheduleId: Types.ObjectId = schedule['_id'];
			const club = await this.clubsService.addSchedule(clubId, scheduleId);

			if (!club) {
				throw new HttpException('Club is not found', 404);
			}

			return response.json({ message: 'Schedule created successfully' });
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Get('/:cid/schedule')
	@ApiOperation({ summary: 'Get all schedule for the requested month' })
	@ApiResponse({
		status: 200,
		description: 'Get all schedule for the requested month successfully',
	})
	@ApiBadRequestResponse({ description: 'Bad request' })
	async getAllSchedulesForTheMonth(
		@Param('cid') clubId: string,
		@Query('month') month: number,
		@Res({ passthrough: true }) response: Response,
	) {
		try {
			const scheduleIds = await this.clubsService.getAllSchedules(clubId);
			const schedulesForMonth = await this.scheduleService.getAllSchedulesForTheMonth(
				scheduleIds,
				month,
			);

			if (!schedulesForMonth) {
				throw new HttpException('Bad request', 400);
			}

			return response.json({
				message: 'Get all schedule for the requested month successfully',
				schedulesForMonth,
			});
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Get('/:cid/schedule/:sid')
	@ApiOperation({ summary: 'Get a schedule' })
	@ApiResponse({ status: 200, description: 'Get a schedule successfully' })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async getScheduleById(
		@Param('cid') clubId: string,
		@Param('sid') scheduleId: string,
		@Res({ passthrough: true }) response: Response,
	) {
		try {
			const scheduleIds = await this.clubsService.getAllSchedules(clubId);

			if (!scheduleIds.includes(scheduleId as unknown as Types.ObjectId)) {
				throw new HttpException('Bad request', 400);
			}

			const schedule = await this.scheduleService.getScheduleById(scheduleId);

			if (!schedule) {
				throw new HttpException('Bad request', 400);
			}

			return response.json({ message: 'Get a schedule successfully', schedule });
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Patch('/:cid/schedule/:sid')
	@ApiOperation({ summary: 'Update a schedule' })
	@ApiResponse({ status: 200, description: 'Update a schedule successfully' })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async updateSchedule(
		@Param('cid') clubId: string,
		@Param('sid') scheduleId: string,
		@Body() updateData: Partial<ClubDto.Request.CreateScheduleDto>,
		@Res({ passthrough: true }) response: Response,
	) {
		try {
			const scheduleIds = await this.clubsService.getAllSchedules(clubId);

			if (!scheduleIds.includes(scheduleId as unknown as Types.ObjectId)) {
				throw new HttpException('Bad request', 400);
			}

			const updatedSchedule = await this.scheduleService.updateSchedule(scheduleId, updateData);

			if (!updatedSchedule) {
				throw new HttpException('Bad request', 400);
			}

			return response.json({ message: 'Update a schedule successfully', updatedSchedule });
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Delete('/:cid/schedule/:sid')
	@ApiOperation({ summary: 'Delete a schedule' })
	@ApiResponse({ status: 200, description: 'Delete a schedule successfully' })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async deleteSchedule(
		@Param('cid') clubId: string,
		@Param('sid') scheduleId: string,
		@Res({ passthrough: true }) response: Response,
	) {
		try {
			const scheduleIds = await this.clubsService.getAllSchedules(clubId);

			if (!scheduleIds.includes(scheduleId as unknown as Types.ObjectId)) {
				throw new HttpException('Bad request', 400);
			}

			const deletedSchedule = await this.scheduleService.deleteSchedule(scheduleId);

			if (!deletedSchedule) {
				throw new HttpException('Bad request', 400);
			}

			return response.json({ message: 'Delete a schedule successfully', deletedSchedule });
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	// user가 따로 배열에 굳이 저장 해야 하는지 의문이라서 일단 뺌
	@Post('/:cid/review')
	@ApiOperation({ summary: 'create a review', description: 'review 생성' })
	@ApiBody({ type: CreateReviewDTO })
	@ApiParam({ name: 'cid', description: 'Club ID' })
	@ApiResponse({ status: 201, description: '업로드에 성공하였습니다' })
	@ApiResponse({ status: 404, description: '업로드에 실패하였습니다' })
	async createReview(
		@Body() createReivewDTO: CreateReviewDTO,
		// 그냥 Body로 id를 받아오면 안되나?
		@Param('cid') clubId: string,
	) {
		try {
			const review = await this.reveiwSerice.create(createReivewDTO);

			if (!review) {
				throw new NotFoundException('Review not found');
			}

			const reviewId: Types.ObjectId = review['_id'];
			const club = await this.clubsService.addReview(clubId, reviewId);

			if (!club) {
				throw new HttpException('Bad request', 400);
			}

			return review;
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Get('/:cid/review/')
	@ApiOperation({ summary: 'get all review of club', description: 'review 가져오기' })
	@ApiParam({ name: 'cid', description: 'Club ID' })
	@ApiResponse({ status: 201, description: '업로드에 성공하였습니다' })
	@ApiResponse({ status: 404, description: '업로드에 실패하였습니다' })
	async getAllReviews(@Param('cid') clubId: string) {
		try {
			const reviewIds = await this.clubsService.getAllReviews(clubId);

			const reviewPromises = reviewIds.map(rid => this.reveiwSerice.getReviewById(rid));

			const reviews = await Promise.all(reviewPromises);

			return reviews;
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Patch('/review/:rid')
	@ApiOperation({ summary: 'update a review', description: 'review 수정' })
	@ApiBody({ type: CreateReviewDTO })
	@ApiParam({ name: 'rid', description: 'Review ID' })
	@ApiResponse({ status: 200, description: '수정 성공' })
	async updateReview(@Param('rid') reviewId: string, @Body() updateData: Partial<CreateReviewDTO>) {
		try {
			const updatedReview = await this.reveiwSerice.updateReview(reviewId, updateData);

			if (!updatedReview) {
				throw new HttpException('Bad request', 400);
			}

			return updatedReview;
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Delete('/:cid/review/:rid')
	@ApiOperation({ summary: 'delete a review', description: 'review 삭제' })
	@ApiParam({ name: 'cid', description: 'Club ID' })
	@ApiParam({ name: 'rid', description: 'Review ID' })
	@ApiResponse({ status: 200, description: '삭제 성공' })
	async deleteReview(@Param('cid') clubId: string, @Param('rid') reviewId: string) {
		try {
			const reviewIds = await this.clubsService.getAllReviews(clubId);

			if (!reviewIds.includes(reviewId as unknown as Types.ObjectId)) {
				throw new HttpException('Bad request', 400);
			}

			await this.clubsService.deleteReview(clubId, reviewId);
			const deletedReview = await this.reveiwSerice.deleteReview(reviewId);

			if (!deletedReview) {
				throw new HttpException('Bad request', 400);
			}

			return deletedReview;
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}
