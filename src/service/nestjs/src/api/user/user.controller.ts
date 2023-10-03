import { Body, Controller, Get, HttpException, Patch, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/auth/guard';
import { User } from 'common/database/schema/user.schema';
import { UserService } from './user.service';
import { ImageService } from '../image/service/image.service';
import { S3Service } from '../image/service/s3.service';

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
}
