import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';
import { ApiProperty } from '@nestjs/swagger';

// const schemaOptions: SchemaOptions = {
// 	timestamps: true,
// 	collection: 'members',
// };

@Schema()
export class Member {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		required: true,
		unique: true,
	})
	@ApiProperty({ description: 'user 정보' })
	user: User;

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
