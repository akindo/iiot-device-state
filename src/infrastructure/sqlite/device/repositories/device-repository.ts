import { EntityRepository } from '@mikro-orm/sqlite';
import type { DeviceRepository } from '../../../../domain/device/repositories/device-repository.js';
import { DeviceEntity } from '../entities/device.entity.js';

export class InMemoryDeviceRepository extends EntityRepository<DeviceEntity> implements DeviceRepository {
	async getAll(): Promise<DeviceEntity[] | undefined> {
		return this.em.fork().findAll(DeviceEntity, { populate: ['state'] });
	}
}
