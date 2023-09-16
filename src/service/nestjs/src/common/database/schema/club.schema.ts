import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { ApiProperty } from '@nestjs/swagger';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'clubs',
};
class Member {
	@Prop({
		type: Types.ObjectId,
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

enum ClubTag{
	study = "study",
	travel = "travel",
}
@Schema(schemaOptions)
export class Club {
	@ApiProperty({ description: '동아리 이름', example: '윙크', uniqueItems: true })
	@Prop({
		type: String,
		required: true,
		unique: true,
	})
	name: string;

	@ApiProperty({ description: '동아리 소개글', example: '우리 동아리 짱짱!!', required: false })
	@Prop({ type: String })
	description: string;

	@ApiProperty({ description: '동아리 규칙', example: '담배, 술 X', required: false })
	@Prop({ type: String })
	rule: string;

	@ApiProperty({ description: '동아리 태그 배열', example: ['#스터디', '#가족같은 분위기'], required: false })
	@Prop({ type: [String] })
	tags: string[]; // enum을 사용해서 문자열에 이름을 주기?

	@ApiProperty({ description: '동아리 member들 정보', required: false })
	@Prop({ type: [Member], required: false })
	members: Member[];
}

export type ClubDocument = Club & Document;
export const ClubSchema = SchemaFactory.createForClass(Club);
