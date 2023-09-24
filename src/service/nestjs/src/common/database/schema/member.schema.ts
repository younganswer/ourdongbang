import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Member {
	@Prop({
		type: Types.ObjectId,
		ref: 'users',
		required: true,
		// unique: true, 동일한 사용자가 여러 동아리 멤버로 참여할 수 있음
	})
	@ApiProperty({ description: 'user 정보' })
	user: Types.ObjectId;

	@Prop({
		type: String,
		required: true,
	})
	@ApiProperty({ description: 'user의 권한', example: '관리자' })
	role: String;

	@Prop({
		type: Number,
		required: true,
	})
	@ApiProperty({ description: 'user 참여도', example: 70 })
	participation: Number;
}

export type MemberDocument = Member & Document;
export const MemberSchema = SchemaFactory.createForClass(Member);
