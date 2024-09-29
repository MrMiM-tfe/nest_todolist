import { User } from 'src/users/entities/user.entities';

declare global {
	namespace Express {
		interface Request {
			user?: User; // Make the user property optional or required based on your setup
		}
	}
}
