import type { DeviceState } from './device-state.js';

export class Device {
	constructor(
		public id: string,
		public name: string,
		public state: DeviceState
	) {}
}
