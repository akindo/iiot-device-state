import * as GetDevicesResponse from '../../../../../test/data/get-devices-response.json' with { type: 'json' };
import { DeviceState, Status } from '../../../../domain/device/models/device-state.js';
import { Device } from '../../../../domain/device/models/device.js';
import { DeviceRepository } from '../../../../domain/device/repositories/device-repository.js';
import { logger } from '../../../../utils/logger.js';

export class AwsDeviceRepository implements DeviceRepository {
	async getAll(): Promise<Device[] | undefined> {
		const devices = GetDevicesResponse.default.map(
			(device) =>
				new Device(
					device.id,
					device.name,
					new DeviceState(
						device.state.status as Status,
						device.state.softwareVersion,
						new Date(device.state.lastReportedAt)
					)
				)
		);

		logger.debug(`Retrieved mocked devices:`, devices);

		return devices;
	}
}
