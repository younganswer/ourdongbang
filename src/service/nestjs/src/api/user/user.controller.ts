import { Body, Controller, Get, HttpException, Patch, Req, Res, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/auth/guard';
import { User } from 'common/database/schema/user.schema';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
@ApiTags('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

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
	async updateMe(
		@Body() updateData: Partial<User>,
		@Req() req,
		@Res({ passthrough: true }) response: Response,
	) {
		try {
			const me = await this.userService.updateMe(req.user._id, updateData);

			if (!me) {
				throw new HttpException('Bad Request', 400);
			}

			return response.status(200).json({
				message: 'Update my information successfully',
				me,
			});
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}
