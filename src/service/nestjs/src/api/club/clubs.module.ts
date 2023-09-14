import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Club, ClubSchema } from 'common/database/schema/club.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Club.name, schema: ClubSchema}])
  ],
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}
