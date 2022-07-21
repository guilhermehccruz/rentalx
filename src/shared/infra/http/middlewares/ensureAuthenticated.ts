import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError('Token is missing', 401);
	}

	const [, token] = authHeader.split(' ');

	try {
		const { sub: userId } = verify(token, '803109dc001042616315c80d3ca4becf') as IPayload;

		const usersRepository = new UsersRepository();

		const user = usersRepository.findById(userId);

		if (!user) {
			throw new AppError('User does not exits', 401);
		}

		request.user = {
			id: userId,
		};

		next();
	} catch (error) {
		throw new AppError('Token is missing', 401);
	}
}
