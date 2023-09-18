import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

const schemaOptions: SchemaOptions = {
	timestamps: true,
	collection: 'reviews',
};

@Schema(schemaOptions)
export class Audit {
    @Prop({
        type: String,
        required: true,
    })
    @ApiProperty({ description: '가맹점', example: '소한마리 정릉점' })
    franchise: string;

    @Prop({
        type: String,
        required: true,
    })
    @ApiProperty({ description: '날짜', example: '2023-09-18' })
    date: string;

    @Prop({
        type: String,
        required: true,
    })
    @ApiProperty({ description: '작성자', example: '윤현승' })
    auditor: string;

    @Prop({
        type: Number,
        required: true,
    })
    @ApiProperty({ description: '결제금액', example: 50000 })
    cost: Number;

    @Prop({
		type: [Types.ObjectId],
		ref: 'images',
		required: true,
		unique: true,
	})
	@ApiProperty({ description: 'user 정보' })
	images: Types.ObjectId[];
}

export type AuditDocument = Audit & Document;
export const AuditSchema = SchemaFactory.createForClass(Audit);
