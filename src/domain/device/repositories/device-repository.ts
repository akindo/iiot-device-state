import { type Device } from '../entities/device.js';

export interface DeviceRepository {
	// create(device: Device): Promise<Device>;
	// findById(id: string): Promise<Device | undefined>;
	getAll(): Promise<Device[] | undefined>;
	// update(device: Device): Promise<Device>;
	// delete(device: Device): Promise<void>;
}
