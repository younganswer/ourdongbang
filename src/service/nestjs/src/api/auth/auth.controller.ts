import { Controller, Get, Post, Res, Body, HttpException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiCookieAuth } from '@nestjs/swagger';
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

	@Get('login')
	@ApiCookieAuth()
	@ApiOperation({ summary: 'Login' })
	@ApiResponse({ status: 200, description: 'Logged in successfully', type: User })
	async login(@Body() loginRequestDto: LoginRequestDto, @Res({ passthrough: true }) res: Response): Promise<User> {
		try {
			const user = await this.loginService.login(loginRequestDto);
			const jwt = this.cookieService.createJwt<JwtPayload>({
				id: user.id,
			});
			const cookieOption = this.cookieService.getCookieOption();

			res.cookie('accessToken', jwt, cookieOption);
			return user;
		} catch (error) {
			throw new HttpException(error.message, 400);
		}
	}

	@Post('register')
	@ApiCookieAuth()
	@ApiOperation({ summary: 'Register' })
	@ApiResponse({ status: 200, description: 'Registered successfully', type: User })
	async register(@Body() registerRequestDto: RegisterRequestDto, @Res({ passthrough: true }) res: Response) {
		try {
			const user = await this.registerService.register(registerRequestDto);
			const jwt = this.cookieService.createJwt<JwtPayload>({
				id: user.id,
			});
			const cookieOption = this.cookieService.getCookieOption();

			res.cookie('accessToken', jwt, cookieOption);
			return user;
		} catch (error) {
			throw new HttpException(error.message, 400);
		}
	}
}
