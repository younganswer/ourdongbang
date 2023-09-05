import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		ApiModule,
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		MongooseModule.forRoot(process.env.MONGO_URI),
	],
})
export class AppModule {}
