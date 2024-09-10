import { OptionalProps, PrimaryKey, Property } from '@mikro-orm/sqlite';

export abstract class BaseEntity<Optional = never> {
	[OptionalProps]?: 'createdAt' | 'updatedAt' | Optional;

	@PrimaryKey({ type: 'uuid' })
	id = crypto.randomUUID();

	@Property()
	createdAt = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt = new Date();
}
