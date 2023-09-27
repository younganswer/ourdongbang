import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'audits',
};

@Schema(schemaOptions)
export class Audit {
	@ApiProperty({
		example: '수유리 우동',
		type: String,
	})
	@Prop({
		type: String,
	})
	franchise: string;

	@ApiProperty({
		example: '2023-09-14',
		type: Date,
	})
	@Prop({
		type: Date,
	})
	date: string;

	@ApiProperty({
		example: '30000',
		type: Number,
	})
	@Prop({
		type: Number,
	})
	cost: number;

	@ApiProperty({
		example: '성정규',
		type: String,
	})
	@Prop({
		type: String,
	})
	auditor: string;

	@ApiProperty({
		example: ['31fafa4d2ca3608765816679', '79fafa4d2ca3608765825379', '62fafa4d2ca3601867816679'],
		type: [Types.ObjectId],
	})
	@Prop({
		type: [Types.ObjectId],
		ref: 'images',
	})
	images: Types.ObjectId[];
}

export type AuditDocument = Audit & Document;

export const AuditSchema = SchemaFactory.createForClass(Audit);
