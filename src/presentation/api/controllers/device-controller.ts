import type { IncomingMessage, ServerResponse } from 'node:http';
import { logger } from '../../../utils/logger.js';
import { InMemoryDeviceRepository } from '../../../infrastructure/sqlite/device/repositories/device-repository.js';
import { AwsDeviceRepository } from '../../../infrastructure/aws/device/repositories/device-repository.js';

const apiVersion = 'v1';

async function deviceRouter(
	request: IncomingMessage,
	response: ServerResponse,
	dbRepository: InMemoryDeviceRepository,
	awsDeviceRepository: AwsDeviceRepository
) {
	if (request.method === 'GET') {
		const parsedUrl = new URL(request.url ?? '', `http://${request.headers.host}`);
		const { pathname } = parsedUrl;

		if (pathname === `/${apiVersion}/devices`) {
			try {
				// TODO: consider using the Mediator pattern to decouple the presentation and application layers.
				const devices = await awsDeviceRepository.getAll();

				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify(devices));
			} catch (error) {
				logger.error('Error fetching devices:', error);

				response.writeHead(500, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify({ message: `Internal Server Error` }));
			}
		} else if (pathname === `/${apiVersion}/devices/from-db`) {
			try {
				// TODO: consider using the Mediator pattern to decouple the presentation and application layers.
				// const deviceService = new DeviceService(db.deviceRepository);
				// const devices = await deviceService.getAll();
				const devices = await dbRepository.getAll();

				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify(devices));
			} catch (error) {
				logger.error('Error fetching devices:', error);

				response.writeHead(500, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify({ message: `Internal Server Error` }));
			}
		} else {
			response.writeHead(404, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify({ message: 'Not Found' }));
		}
	} else {
		response.writeHead(405, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify({ message: 'Method Not Allowed' }));
	}
}

export default deviceRouter;
