import { Trim } from '@miaooo/class-transformer-trim';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';

export class RegisterRequestDto {
	@IsString()
	@IsNotEmpty()
	@Length(3, 4)
	@Trim()
	@ApiProperty({ example: '장정안' })
	name: string;

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

	@IsEmail()
	@IsNotEmpty()
	@Trim()
	@ApiProperty({ example: 'inetty@kookmin.ac.kr' })
	email: string;

	@IsString()
	@Trim()
	@ApiProperty({ example: '소프트웨어융합학부' })
	major: string;

	@IsNumberString()
	@Length(8, 8)
	@Trim()
	@ApiProperty({ example: '20191658' })
	studentId: string;
}
