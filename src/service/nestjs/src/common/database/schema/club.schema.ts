import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'clubs',
};

@Schema(schemaOptions)
export class Club {
	@Prop({
		type: Types.ObjectId,
		required: true,
		unique: true,
	})
	_id: Types.ObjectId;

	@Prop({
		type: String,
		required: true,
		unique: true,
	})
	name: string;

	@Prop({ type: String })
	description: string;

	@Prop({ type: String })
	rule: string;

	@Prop({ type: [String] })
	tags: string[]; // tag는 따로 collection이 필요 한가? 아니면 그냥 string 배열을 쓸까?

	// @Prop({ type: [User] }) // 에러가 나는중...
	// members: User[];
}

export type ClubDocument = Club & Document;

export const ClubSchema = SchemaFactory.createForClass(Club);
