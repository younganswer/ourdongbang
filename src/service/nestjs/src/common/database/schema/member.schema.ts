import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'members',
};
@Schema(schemaOptions)
export class Member {
	@Prop({
		type: Types.ObjectId,
		ref: 'users',
		required: true,
		// unique: true, 동일한 사용자가 여러 동아리 멤버로 참여할 수 있음
	})
	@ApiProperty({ description: 'user 정보' })
	userId: Types.ObjectId;

	@Prop({
		type: String,
		required: true,
	})
	@ApiProperty({ description: 'user의 권한', example: '관리자' })
	role: string;

	@Prop({
		type: Number,
		required: true,
	})
	@ApiProperty({ description: 'user 참여도', example: 0, default: 0 })
	participation: number;
}

export type MemberDocument = Member & Document;
export const MemberSchema = SchemaFactory.createForClass(Member);
