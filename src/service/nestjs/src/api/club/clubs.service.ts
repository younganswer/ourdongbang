import { Injectable } from '@nestjs/common';
import { Club, ClubDocument } from 'common/database/schema/club.schema';

@Injectable()
export class ClubsService {
    getAll(): string {
        return 'this will return all clubs';
    }

    getOne(): string {
        return "this will return one club";
    }
}
