import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'schedules',
};

@Schema(schemaOptions)
export class Schedule {
	@ApiProperty({
		example: '2023-09-14',
		type: String,
		required: true,
	})
	@Prop({
		type: String,
		required: true,
	})
	date: string;

	@ApiProperty({
		example: '한강 나들이',
		type: String,
		required: true,
	})
	@Prop({
		type: String,
		required: true,
	})
	title: string;

	@ApiProperty({
		example: '뚝섬 한강 공원으로 나들이를 갑니다. 저녁엔 치맥까지',
		type: String,
		required: true,
	})
	@Prop({
		type: String,
		required: true,
	})
	description: string;

	@ApiProperty({
		example: ['31fafa4d2ca3608765816679', '79fafa4d2ca3608765825379', '62fafa4d2ca3601867816679'],
		type: [Types.ObjectId],
		required: true,
	})
	@Prop({
		type: [Types.ObjectId],
		required: true,
	})
	attendees: Types.ObjectId[];
}

export type ScheduleDocument = Schedule & Document;

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
