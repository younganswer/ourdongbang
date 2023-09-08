import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsString } from 'class-validator';

export class AuthResponseDto {
	@IsString()
	@IsJWT()
	@ApiProperty({
		example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKYW5nIiwiaWF0IjoxNjI0NjQwNjY2LCJleHAiOj',
		description: 'JWT token',
	})
	accessToken: string;
}
