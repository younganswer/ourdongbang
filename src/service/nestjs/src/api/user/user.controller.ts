import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiCookieAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'common/auth/guard';
import { User } from 'common/database/schema/user.schema';

@Controller('user')
@ApiTags('user')
export class UserController {
	constructor() {}

	@Get('me')
	@ApiCookieAuth()
	@UseGuards(JwtAuthGuard)
	@ApiOperation({ summary: 'Get my information' })
	@ApiOkResponse({ description: 'Get my information successfully', type: User })
	async me(@Req() req): Promise<User> {
		const user = req.user;

		return user;
	}
}
