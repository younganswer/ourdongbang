import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Club, ClubDocument } from 'common/database/schema/club.schema';
import { CreateClubDTO } from './dto/request/createClub.dto';

@Injectable()
export class ClubsService {
	constructor(@InjectModel(Club.name) private clubModel: Model<Club>) {}

	async create(createClubDto: CreateClubDTO): Promise<Club> {
		const createdClub = new this.clubModel(createClubDto);
		return createdClub.save();
	}

	async findAll(): Promise<Club[]> {
		return this.clubModel.find().exec();
	}

	async findOne(id: string): Promise<Club> {
		return this.clubModel.findOne({ _id: id }).exec();
	}

	async searchByName(name: string): Promise<Club[]> {
		return this.clubModel.find({ name }).exec();
	}

	async update(clubId: string, updateData: Partial<Club>): Promise<Club | null> {
		return this.clubModel.findByIdAndUpdate(clubId, updateData, { new: true }).exec();
	}

	async delete(id: string) {
		const deletedClub = await this.clubModel.findByIdAndRemove({ _id: id }).exec();
		return deletedClub;
	}
}
