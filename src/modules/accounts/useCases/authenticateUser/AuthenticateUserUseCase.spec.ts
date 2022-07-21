import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

const user: ICreateUserDTO = {
	driverLicense: '000123',
	email: 'user@test.com',
	name: 'User Test',
	password: 'test',
};

describe('Authenticate User', () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
		createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
	});

	it('Should be able to authenticate an user', async () => {
		await createUserUseCase.execute(user);

		const token = await authenticateUserUseCase.execute({
			email: user.email,
			password: user.password,
		});

		expect(token).toHaveProperty('token');
	});

	it('Should not be able to a nonexistent user', () => {
		expect(async () => {
			await authenticateUserUseCase.execute({
				email: 'user.test.com',
				password: 'test',
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('Should not be able to authenticate with the wrong password', () => {
		expect(async () => {
			await createUserUseCase.execute(user);

			await authenticateUserUseCase.execute({
				email: user.email,
				password: 'wrong password',
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
