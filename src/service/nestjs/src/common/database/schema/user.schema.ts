import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
class Club {
	@Prop({
		type: Types.ObjectId,
		required: true,
		unique: true,
		ref: 'clubs',
	})
	_id: Types.ObjectId;
}

const ClubSchema = SchemaFactory.createForClass(Club);

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'users',
};

@Schema(schemaOptions)
export class User {
	@Prop({
		type: String,
		required: true,
	})
	name: string;

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

	@Prop({
		type: String,
		required: true,
		unique: true,
	})
	email: string;

	@Prop({ type: String })
	major: string;

	@Prop({
		type: String,
		unique: true,
	})
	studentId: string;

	@Prop({
		type: Types.ObjectId,
		unique: true,
		ref: 'images',
	})
	profileImageId: Types.ObjectId;

	@Prop({ type: ClubSchema })
	clubs: (typeof ClubSchema)[];
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
