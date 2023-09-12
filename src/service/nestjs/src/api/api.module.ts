import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ClubsModule } from './club/clubs.module';

@Module({
	imports: [AuthModule, ClubsModule],
})
export class ApiModule {}
