import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ClubsModule } from './club/clubs.module';
import { UserModule } from './user/user.module';
import { receiptModule } from './receipt/receipt.module';
import { ReviewsModule } from './review/reviews.module';

@Module({
	imports: [AuthModule, ClubsModule, UserModule, receiptModule, ReviewsModule],
})
export class ApiModule {}
