import {
	Body,
	Controller,
	Get,
	HttpException,
	Param,
	Patch,
	Post,
	Req,
	UseGuards,
} from '@nestjs/common';
import {
	ApiBadRequestResponse,
	ApiOkResponse,
	ApiOperation,
	ApiResponse,
	ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/auth/guard';
import { User } from 'common/database/schema/user.schema';
import { UserService } from './user.service';
import { ImageService } from '../image/service/image.service';
import { S3Service } from '../image/service/s3.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
@ApiTags('user')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly imageService: ImageService,
		private readonly s3Service: S3Service,
	) {}

	@Get('me')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get my information' })
	@ApiOkResponse({ description: 'Get my information successfully', type: User })
	async me(@Req() req): Promise<User> {
		const user = req.user;

		return user;
	}

	@Patch('me')
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Update my information' })
	@ApiOkResponse({ description: 'Update my information successfully', type: User })
	async updateMe(@Body() updateData: Partial<User>, @Req() req) {
		try {
			const me = await this.userService.updateMe(req.user._id, updateData);

			if (!me) {
				throw new HttpException('Bad Request', 400);
			}

			if (updateData.profileImageId) {
				this.imageService.delete(req.user.profileImageId);
				this.s3Service.delete([
					'profile/raw/' + req.user.profileImageId,
					'profile/w512/' + req.user.profileImageId,
				]);
			}

			return {
				message: 'Update my information successfully',
				me,
			};
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Get('/:_id')
	@ApiOperation({ summary: 'Get user information' })
	@ApiOkResponse({ description: 'Get user information successfully', type: User })
	async getUserByObjectId(@Param('_id') _id: string): Promise<User> {
		try {
			const user = await this.userService.findByObjectId(_id);
			if (!user) {
				throw new HttpException('Bad Request', 400);
			}

			return user;
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}

	@Patch('me/password')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, description: 'Update my password successfully' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async updateMyPassword(
		@Body('password') password: string,
		@Body('newPassword') newPassword: string,
		@Req() req,
	) {
		try {
			const user = await this.userService.findByObjectId(req.user._id);
			if (!user) {
				throw new HttpException('Bad Request', 400);
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				throw new HttpException('Password is not correct', 401);
			}

			const me = await this.userService.updatePassword(req.user._id, newPassword);
			if (!me) {
				throw new HttpException('Bad Request', 400);
			}

			return me;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	@Post('email')
	@ApiOperation({ summary: 'Get user information' })
	@ApiOkResponse({ description: 'Get user information successfully', type: User })
	async getUserByEmail(@Body('email') email: string): Promise<User> {
		try {
			const user = await this.userService.findByEmail(email);
			if (!user) {
				throw new HttpException('Bad Request', 400);
			}

			return user;
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}
