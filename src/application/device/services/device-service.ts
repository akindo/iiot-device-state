import { type Device } from '../../../domain/device/entities/device.js';
import { type DeviceRepository } from '../../../domain/device/repositories/device-repository.js';
import { logger } from '../../../utils/logger.js';

export class DeviceService {
	constructor(private readonly deviceRepository: DeviceRepository) {}

	async getAll(): Promise<Device[] | undefined> {
		const devices = this.deviceRepository.getAll();
		logger.debug(`Retrieved devices from DB:`, devices);

		return devices;
	}
}
