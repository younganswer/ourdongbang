import { Controller, Post, Res, Body, HttpException, Delete, Patch } from '@nestjs/common';
import {
	ApiTags,
	ApiOperation,
	ApiCookieAuth,
	ApiOkResponse,
	ApiUnauthorizedResponse,
	ApiBadRequestResponse,
} from '@nestjs/swagger';
import { User } from 'common/database/schema/user.schema';
import { JwtPayload } from 'common/auth/type';
import { RegisterRequestDto } from './dto/request/register.dto';
import { Response } from 'express';
import { LoginService, CookieService, RegisterService } from './service';
import { LoginRequestDto } from './dto/request/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
	constructor(
		private readonly loginService: LoginService,
		private readonly cookieService: CookieService,
		private readonly registerService: RegisterService,
	) {}

	@Patch('login')
	@ApiCookieAuth()
	@ApiOperation({ summary: 'Login' })
	@ApiOkResponse({ description: 'Login successfully', type: User })
	@ApiBadRequestResponse({ description: 'Bad request' })
	@ApiUnauthorizedResponse({ description: 'ID or password is incorrect' })
	async login(
		@Body() loginRequestDto: LoginRequestDto,
		@Res({ passthrough: true }) response: Response,
	): Promise<User> {
		try {
			const user = await this.loginService.login(loginRequestDto);
			const jwt = this.cookieService.createJwt<JwtPayload>({
				_id: user._id.toString(),
			});
			const cookieOption = this.cookieService.getCookieOption();

			response.cookie('access-token', jwt, cookieOption);
			return user;
		} catch (error) {
			throw new HttpException(error.message, 400);
		}
	}

	@Post('register')
	@ApiCookieAuth()
	@ApiOperation({ summary: 'Register' })
	@ApiOkResponse({ description: 'Register successfully', type: User })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async register(@Body() registerRequestDto: RegisterRequestDto, @Res({ passthrough: true }) response: Response) {
		try {
			const user = await this.registerService.register(registerRequestDto);
			const jwt = this.cookieService.createJwt<JwtPayload>({
				_id: user._id.toString(),
			});
			const cookieOption = this.cookieService.getCookieOption();

			response.cookie('access-token', jwt, cookieOption);
			return user;
		} catch (error) {
			throw new HttpException(error.message, 400);
		}
	}

	@Delete('signout')
	@ApiCookieAuth()
	@ApiOperation({ summary: 'Logout' })
	@ApiOkResponse({ description: 'Logout successfully' })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async logout(@Res({ passthrough: true }) response: Response) {
		try {
			const cookieOption = this.cookieService.getCookieOption();

			response.clearCookie('access-token', cookieOption);
		} catch (error) {
			throw new HttpException(error.message, 400);
		}
	}
}
