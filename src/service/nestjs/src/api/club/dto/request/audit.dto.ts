import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { registerDecorator, ValidationOptions } from 'class-validator';
import * as dayjs from 'dayjs';

function IsOnlyDate(validationOptions?: ValidationOptions) {
	return function (object: Record<string, any>, propertyName: string) {
		registerDecorator({
			name: 'IsOnlyDate',
			target: object.constructor,
			propertyName: propertyName,
			constraints: [],
			options: {
				message: 'Please provide only date like 2020-12-08',
				...validationOptions,
			},
			validator: {
				validate(value: any) {
					const regex = /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/;

					return typeof value === 'string' && regex.test(value) && dayjs(value).isValid();
				},
			},
		});
	};
}

export class CreateAuditDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: '가맹점', example: '소한마리 정릉점' })
	franchise: string;

	@IsOnlyDate()
	@IsNotEmpty()
	@ApiProperty({ description: '날짜', example: '2023-09-18' })
	date: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: '작성자', example: '윤현승' })
	auditor: string;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty({ description: '결제금액', example: 50000 })
	cost: number;

	@IsString({ each: true })
	@IsNotEmpty()
	@ApiProperty({ description: 'user 정보' })
	images: Types.ObjectId[];
}
