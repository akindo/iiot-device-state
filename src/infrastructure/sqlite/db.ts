import { MikroORM, Options, EntityManager, ReflectMetadataProvider } from '@mikro-orm/sqlite';
import config from './mikro-orm.config.js';
import { InMemoryDeviceRepository } from './device/repositories/device-repository.js';
import { DeviceEntity } from './device/models/device.entity.js';

export interface Services {
	orm: MikroORM;
	em: EntityManager;
	deviceRepository: InMemoryDeviceRepository;
}

let cache: Services;

export async function initORM(options?: Options): Promise<Services> {
	if (cache) {
		return cache;
	}

	// allow overriding config options for testing
	const orm = await MikroORM.init({
		...config,
		...options,
		metadataProvider: ReflectMetadataProvider,
	});

	// save to cache before returning
	return (cache = {
		orm,
		em: orm.em,
		deviceRepository: orm.em.getRepository(DeviceEntity),
	});
}
