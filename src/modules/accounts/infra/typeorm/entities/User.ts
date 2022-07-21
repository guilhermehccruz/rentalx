import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
	@PrimaryColumn()
	id?: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column({ name: 'driver_license' })
	driverLicense: string;

	@Column({ name: 'is_admin' })
	isAdmin: string;

	@Column()
	avatar: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { User };
