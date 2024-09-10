import { Seeder } from '@mikro-orm/seeder';
import { type EntityManager } from '@mikro-orm/sqlite';
import { Status } from '../../../domain/device/entities/device-state.js';
import { DeviceEntity } from '../device/entities/device.entity.js';
import { DeviceStateEntity } from '../device/entities/device-state.entity.js';
import { logger } from '../../../utils/logger.js';

export class TestSeeder extends Seeder {
	async run(em: EntityManager): Promise<void> {
		const deviceState = em.create(DeviceStateEntity, {
			status: Status.Online,
			softwareVersion: '3.0.5',
			lastReportedAt: new Date('2024-09-09T21:02:55Z'),
		});

		const device = em.create(DeviceEntity, {
			name: 'Device 1',
			state: deviceState,
		});

		logger.debug(`Seed device stored:`, device);
	}
}
