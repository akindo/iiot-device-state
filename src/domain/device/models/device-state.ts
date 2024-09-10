export enum Status {
	Online = 'online',
	Offline = 'offline',
}

export class DeviceState {
	constructor(
		public status: Status,
		public softwareVersion: string,
		public lastReportedAt: Date
	) {}
}
