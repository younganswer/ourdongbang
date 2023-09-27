import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from 'common/database/schema';
import { Model, Types } from 'mongoose';
import { CreateMemberDTO } from '../dto/request/createMember.dto';

@Injectable()
export class MemberService {
	constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

	async create(createMemberDTO: CreateMemberDTO): Promise<Member> {
		try {
			// 멤버 콜렉션에서 userId 속성이 특정 userId 값과 일치하는 멤버를 찾습니다.
			const userId = createMemberDTO.userId;
			const member = await this.memberModel.findOne({ userId: userId }).exec();

			if (member) {
				throw new HttpException('이미 존재하는 유저입니다.', HttpStatus.BAD_REQUEST);
			}

			return await this.memberModel.create(createMemberDTO);
		} catch (error) {
			console.error(error);
			throw new HttpException(error.message, error.status);
		}
	}
}
