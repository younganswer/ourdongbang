import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ClubsModule } from './club/clubs.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [AuthModule, ClubsModule, UserModule],
})
export class ApiModule {}
