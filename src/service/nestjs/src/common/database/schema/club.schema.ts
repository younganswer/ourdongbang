import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { ApiProperty } from '@nestjs/swagger';
import { Member, MemberDocument, MemberSchema } from './member.schema';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'clubs',
};
@Schema(schemaOptions)
export class Club {
	@ApiProperty({ description: '동아리 이름', example: '윙크', uniqueItems: true })
	@Prop({
		type: String,
		required: true,
	})
	name: string;

	@ApiProperty({ description: '동아리 소개글', example: '우리 동아리 짱짱!!', required: false })
	@Prop({ type: String })
	description: string;

	@ApiProperty({ description: '동아리 규칙', example: '담배, 술 X', required: false })
	@Prop({ type: String })
	rule: string;

	@ApiProperty({
		description: '동아리 태그 배열',
		example: ['#스터디', '#가족같은 분위기'],
		required: false,
	})
	@Prop({ type: [String] })
	tags: string[]; // enum을 사용해서 문자열에 이름을 주기?

	@ApiProperty({ description: '동아리 member들 정보', required: false })
	@Prop({
		type: [MemberSchema], // Member를 사용하면 에러남;; 지원하지 않는 mongoose schema?
		required: false,
	})
	members: MemberDocument[];
	@ApiProperty({ description: '동아리 일정', required: false })
	@Prop({
		type: [Types.ObjectId],
		required: false,
	})
	schedules: Types.ObjectId[];}

	@Prop({
		type: [Types.ObjectId],
		ref: 'reviews',
		required: false,
	})
	@ApiProperty({ description: 'reviews id' })
	reviews: Types.ObjectId[];

export type ClubDocument = Club & Document;
export const ClubSchema = SchemaFactory.createForClass(Club);
