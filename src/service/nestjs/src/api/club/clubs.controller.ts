import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { ClubsService } from './clubs.service';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  getAll(): string {
    return this.clubsService.getAll();
  }

  @Get("search")
  search(@Query("name") searchingName:string ){
    return `we are searching for a club with a name: ${searchingName}`;
  }

  @Get(":id")
  getOne(@Param('id') clubId:string ){
    return `This will return one movie with the id: ${clubId}`;
  }

  @Post()
  create(@Body() clubData){
    console.log(clubData);
    return `this will create a club`;
  }

  @Delete(":id")
  remove(@Param('id') clubId:string ){
    return `this will delete a club with the id: ${clubId}`;
  }

  @Patch(":id")
  patch(@Param('id') clubId:string, @Body() updateData ){
    // return `this will patch a club with the id: ${clubId}`;
    return {
        updatedClub: clubId,
        ...updateData
    };
  }
}
