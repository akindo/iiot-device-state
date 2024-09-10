import type { DeviceRepository } from '../../../../domain/device/repositories/device-repository.js';
import { EntityRepository } from '@mikro-orm/sqlite';
import { DeviceEntity } from '../models/device.entity.js';

export class InMemoryDeviceRepository extends EntityRepository<DeviceEntity> implements DeviceRepository {
	async getAll(): Promise<DeviceEntity[] | undefined> {
		return await this.em.fork().findAll(DeviceEntity, { populate: ['state'] });
	}
}
