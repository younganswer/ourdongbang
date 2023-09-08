import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { LoginService, CookieService, RegisterService } from './service';
import { UserSchema } from 'common/database/schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	controllers: [AuthController],
	providers: [LoginService, CookieService, RegisterService],
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				secret: configService.getOrThrow('JWT_SECRET'),
				signOptions: { expiresIn: '1h' },
			}),
		}),
		MongooseModule.forFeature([
			{
				name: 'User',
				schema: UserSchema,
			},
		]),
	],
})
export class AuthModule {}
