import { Trim } from '@miaooo/class-transformer-trim';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class Login {
	@IsString()
	@IsNotEmpty()
	@Length(4, 20)
	@Trim()
	@ApiProperty({ example: 'jhanks1221' })
	id: string;

	@IsString()
	@IsNotEmpty()
	@Length(8, 20)
	@Trim()
	@ApiProperty({ example: 'P@55w0rd!' })
	password: string;
}
