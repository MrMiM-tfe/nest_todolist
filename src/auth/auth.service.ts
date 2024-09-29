import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { Payload } from './types/payload.type';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	/**
	 * Authenticates a user by verifying their username and password.
	 *
	 * @param username - The username of the user to authenticate.
	 * @param password - The password of the user to authenticate.
	 * @returns An object containing the access token for the authenticated user.
	 * @throws UnauthorizedException if the username or password is invalid.
	 */
	async signIn(username: string, password: string) {
		const user = await this.usersService.userModel
			.findOne({ username })
			.select('+password');
		if (!user) throw new UnauthorizedException();

		const compareResult = bcrypt.compareSync(password, user.password);
		if (!compareResult) throw new UnauthorizedException();

		const payload: Payload = {
			sub: user.id,
			username: user.username,
			role: user.role,
		};
		const access_token = await this.jwtService.signAsync(payload);

		return { access_token };
	}

	/**
	 * Registers a new user with the provided registration data.
	 *
	 * @param registerDto - The registration data for the new user.
	 * @returns The created user document.
	 */
	async register(registerDto: RegisterDto) {
		const userData: RegisterDto = {
			...registerDto,
			password: bcrypt.hashSync(registerDto.password, 10),
		};
		return await this.usersService.userModel.create(userData);
	}
}
