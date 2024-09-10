import { Device } from '../../../../domain/device/models/device.js';
import { BaseEntity } from '../../common/base-entity.js';
import { InMemoryDeviceRepository } from '../repositories/device-repository.js';
import { Entity, EntityRepositoryType, OneToOne, Property } from '@mikro-orm/sqlite';
import { DeviceStateEntity } from './device-state.entity.js';

@Entity({ repository: () => InMemoryDeviceRepository })
export class DeviceEntity extends BaseEntity<'id'> implements Device {
	[EntityRepositoryType]?: InMemoryDeviceRepository;

	@Property()
	name: string;

	@OneToOne()
	state: DeviceStateEntity;

	constructor(name: string, state: DeviceStateEntity) {
		super();
		this.name = name;
		this.state = state;
	}
}
