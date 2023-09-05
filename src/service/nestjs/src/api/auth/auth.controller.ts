import { Controller, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Patch('login')
	@ApiOperation({ summary: 'Login' })
	@ApiResponse({ status: 200, description: 'Success' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	async login() {
		return await this.authService.login();
	}
}
