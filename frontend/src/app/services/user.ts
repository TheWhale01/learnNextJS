import UserInterface from '../interfaces/User.interface';

class UserService {
	static user: UserInterface | null = null;

	static get getUsername(): string { return this.user.username };

	static setUser(user: UserInterface): void {
		this.user = user;	
	}
}

export default UserService;
