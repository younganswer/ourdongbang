import { Trim } from '@miaooo/class-transformer-trim';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { MemberDocument } from 'common/database/schema/member.schema';

export namespace ClubDTO {

    export namespace Request {

        export class CreateClub {
            @IsString()
	        @IsNotEmpty()
	        @Length(4, 20)
	        @Trim()
	        @ApiProperty({ example: '12345' })
	        id: string;

            @IsString()
	        @IsNotEmpty()
	        @Length(4, 20)
	        @Trim()
	        @ApiProperty({ example: '우동' })
	        name: string;

            @IsString()
	        @IsNotEmpty()
	        @Length(4, 500)
	        @Trim()
	        @ApiProperty({ example: '우동 맛집 탐방동아리 입니다' })
	        description: string;

            @IsString()
	        @Length(4, 500)
	        @Trim()
	        @ApiProperty({ example: '술, 담배 X' })
	        rule: string;

            @IsString()
	        @Length(4, 20)
	        @Trim()
	        @ApiProperty({ example: '#인싸' })
	        tags: string;
            
	        @Trim()
	        members: MemberDocument[];
        }
    }
}