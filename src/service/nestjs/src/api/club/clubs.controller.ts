import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Patch,
	Query,
	HttpException,
	HttpStatus,
	NotFoundException,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { Club } from 'common/database/schema/club.schema';
import {
	ApiTags,
	ApiOperation,
	ApiResponse,
	ApiBadRequestResponse,
	ApiBody,
	ApiQuery,
	ApiParam,
	ApiNotFoundResponse,
	PartialType,
} from '@nestjs/swagger';
import { CreateClubDTO } from './dto/request/createClub.dto';

@ApiTags('club API')
@Controller('clubs')
export class ClubsController {
	constructor(private readonly clubsService: ClubsService) {}

	@Get()
	@ApiOperation({ summary: 'request all club', description: '모든 동아리 정보 가져오기' })
	@ApiResponse({ status: 200, description: 'get all club successfully', type: [Club] })
	@ApiBadRequestResponse({ description: 'Bad request' })
	async findAll(): Promise<Club[]> {
		try {
			const clubs = this.clubsService.findAll();
			if (!clubs) {
				throw new NotFoundException('Clubs not found');
			}
			return clubs;
		} catch (error) {
			throw new HttpException('Failed to retrieve clubs', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get('search')
	@ApiOperation({ summary: 'search club', description: '이름으로 동아리 검색' })
	@ApiResponse({ status: 200, description: 'Search club successfully', type: [Club] })
	@ApiBadRequestResponse({ description: 'Bad request' })
	@ApiNotFoundResponse({ description: 'not found' })
	async search(@Query('name') searchingName: string) {
		try {
			const clubs = await this.clubsService.searchByName(searchingName);

			if (!clubs || clubs.length === 0) {
				throw new NotFoundException('Clubs not found');
			}
			return clubs;
		} catch (error) {
			throw new HttpException('Failed to search clubs', HttpStatus.BAD_REQUEST);
		}
	}

	@Get(':id')
	@ApiOperation({ summary: 'get one club', description: '요청 id에 해당하는 club data 가져오기' })
	@ApiResponse({ status: 200, description: 'get one club data successfully', type: Club })
	@ApiBadRequestResponse({ description: 'Bad request' })
	@ApiNotFoundResponse({ description: 'not found' })
	async findOne(@Param('id') clubId: string) {
		try {
			const club = await this.clubsService.findOne(clubId);
			if (!club) {
				throw new NotFoundException('Club not found');
			}
			return club;
		} catch (error) {
			throw new HttpException('Failed to find a club', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Post()
	@ApiOperation({ summary: 'create a club', description: '동아리 생성' })
	@ApiBody({ type: CreateClubDTO })
	@ApiResponse({ status: 201, description: '업로드에 성공하였습니다' })
	@ApiResponse({ status: 404, description: '업로드에 실패하였습니다' })
	create(@Body() createClubDTO: CreateClubDTO) {
		try {
			const club = this.clubsService.create(createClubDTO);
			if (!club) {
				throw new NotFoundException('Club not found');
			}
			return club;
		} catch (error) {
			throw new HttpException('업로드에 실패하였습니다', HttpStatus.BAD_REQUEST);
		}
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete a club', description: '동아리 삭제' })
	@ApiResponse({ status: 200, description: '동아리 삭제에 성공하였습니다' })
	@ApiParam({
		description: 'Club ID',
		name: 'id',
	})
	remove(@Param('id') clubId: string) {
		try {
			const deletedClub = this.clubsService.delete(clubId);
			if (!deletedClub) {
				throw new NotFoundException('Club not found');
			}
			return deletedClub;
		} catch (error) {
			throw new HttpException('Failed to delete a club', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Patch a club', description: '동아리 정보 수정' })
	@ApiResponse({ status: 200, description: '동아리 수정에 성공하였습니다' })
	@ApiParam({
		description: 'Club ID',
		name: 'id',
	})
	@ApiBody({
		type: PartialType<Club>,
		description: '수정할 동아리 정보',
	})
	async patch(@Param('id') clubId: string, @Body() updateData: Partial<Club>) {
		try {
			const updatedClub = await this.clubsService.update(clubId, updateData);
			if (!updatedClub) {
				throw new NotFoundException('Club not found');
			}
			return updatedClub;
		} catch (error) {
			throw new HttpException('Failed to update club', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
