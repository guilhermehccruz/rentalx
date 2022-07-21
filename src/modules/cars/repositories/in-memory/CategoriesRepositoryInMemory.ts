import { ICreateCategoryDTO } from '@modules/cars/dtos/ICreateCategoryDTO';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';

import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
	categories: Category[] = [];

	async create({ name, description }: ICreateCategoryDTO): Promise<void> {
		const cateqory = new Category();

		Object.assign(cateqory, { name, description });

		this.categories.push(cateqory);
	}

	async list(): Promise<Category[]> {
		return this.categories;
	}

	async findByName(name: string): Promise<Category> {
		return this.categories.find((category) => category.name === name);
	}
}

export { CategoriesRepositoryInMemory };
