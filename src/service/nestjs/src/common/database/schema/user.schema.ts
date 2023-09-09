import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'users',
};

@Schema(schemaOptions)
export class User {
	@ApiProperty({ example: '장정안' })
	@Prop({
		type: String,
		required: true,
	})
	name: string;

	@ApiProperty({ example: 'jhanks1221', uniqueItems: true })
	@Prop({
		type: String,
		required: true,
		unique: true,
	})
	id: string;

	@Prop({
		type: String,
		required: true,
	})
	salt: string;

	@Prop({
		type: String,
		required: true,
	})
	password: string;

	@ApiProperty({ example: 'inetty@kookmin.ac.kr', required: false, uniqueItems: true })
	@Prop({
		type: String,
		required: true,
		unique: true,
	})
	email: string;

	@ApiProperty({ example: '소프트웨어융합학부', required: false })
	@Prop({ type: String })
	major: string;

	@ApiProperty({ example: '20191658', required: false, uniqueItems: true })
	@Prop({
		type: String,
		unique: true,
	})
	studentId: string;

	@ApiProperty({ example: '49fafa4d2ca3602935816679', required: false, uniqueItems: true, type: 'Types.ObjectId' })
	@Prop({
		type: Types.ObjectId,
		unique: true,
		ref: 'images',
	})
	profileImageId: Types.ObjectId;

	@ApiProperty({
		example: ['37fafa4d2ca3382535816679', '82fafa4d2ca3600165816679'],
		required: false,
		type: 'array',
		items: { type: 'Types.ObjectId', uniqueItems: true },
	})
	@Prop({ type: ['Types.ObjectId'], ref: 'clubs' })
	clubs: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
