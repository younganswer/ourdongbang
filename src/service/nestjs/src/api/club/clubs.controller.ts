import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
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
  ApiNotFoundResponse
 } from '@nestjs/swagger';
import { ClubDTO } from './dto/club.dto';

@ApiTags('club API')
@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  @ApiOperation({ summary: 'request all club', description: '모든 동아리 정보 가져오기'})
  @ApiResponse({ status: 200 ,description: 'get all club successfully', type: [Club]})
  @ApiBadRequestResponse({ description: 'Bad request' })
  getAll(): string {
    return this.clubsService.getAll();
  }

  @Get("search")
  @ApiOperation({ summary: 'search club', description: '이름으로 동아리 검색' })
  @ApiResponse({ status: 200, description: 'Search club successfully', type: [Club] })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiNotFoundResponse({ description: 'not found'})
  search(@Query("name") searchingName:string ){
    return `we are searching for a club with a name: ${searchingName}`;
  }

  @Get(":id")
  @ApiOperation({ summary: 'get one club', description: '요청 id에 해당하는 club data 가져오기' })
  @ApiResponse({ status:200, description: 'get one club data successfully', type: Club })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiNotFoundResponse({ description: 'not found'})
  getOne(@Param('id') clubId:string ){
    return `This will return one club with the id: ${clubId}`;
  }

  @Post()
  @ApiOperation({ summary: 'create a club', description: '동아리 생성'})
  @ApiBody({ type: ClubDTO.Request.CreateClub })
  @ApiResponse({ status: 201, description: '업로드에 성공하였습니다' })
  @ApiResponse({ status: 404, description: '업로드에 실패하였습니다' })
  create(@Body() clubData){
    console.log(clubData);
    return `this will create a club`;
  }

  @Delete(":id")
  @ApiOperation({ summary: 'Delete a club', description: '동아리 삭제'})
  @ApiResponse({ status: 200, description: '동아리 삭제에 성공하였습니다' })
  @ApiParam({
    description: 'Club ID',
    name: 'id'
  })
  remove(@Param('id') clubId:string ){
    return `this will delete a club with the id: ${clubId}`;
  }

  @Patch(":id")
  @ApiOperation({ summary: 'Patch a club', description: '동아리 정보 수정'})
  @ApiResponse({ status: 200, description: '동아리 수정에 성공하였습니다' })
  @ApiParam({
    description: 'Club ID',
    name: 'id'
  })
  patch(@Param('id') clubId:string, @Body() updateData ){
    // return `this will patch a club with the id: ${clubId}`;
    return {
        updatedClub: clubId,
        ...updateData
    };
  }
}
