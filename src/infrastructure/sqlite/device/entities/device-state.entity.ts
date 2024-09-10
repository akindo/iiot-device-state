import { Entity, EntityRepositoryType, Property } from '@mikro-orm/sqlite';
import { InMemoryDeviceRepository } from '../repositories/device-repository.js';
import { BaseEntity } from '../../common/base-entity.js';
import { DeviceState, Status } from '../../../../domain/device/entities/device-state.js';

@Entity({ repository: () => InMemoryDeviceRepository })
export class DeviceStateEntity extends BaseEntity<'id'> implements DeviceState {
	[EntityRepositoryType]?: InMemoryDeviceRepository;

	@Property()
	status: Status;

	@Property()
	softwareVersion: string;

	@Property()
	lastReportedAt: Date;

	constructor(status: Status, softwareVersion: string, lastReportedAt: Date) {
		super();
		this.status = status;
		this.softwareVersion = softwareVersion;
		this.lastReportedAt = lastReportedAt;
	}
}
