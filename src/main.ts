import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import process from 'node:process';
import deviceRouter from './presentation/api/controllers/device-controller.js';
import { logger } from './utils/logger.js';
import { initORM } from './infrastructure/sqlite/db.js';
import { TestSeeder } from './infrastructure/sqlite/seeders/test-seeder.js';
import { AwsDeviceRepository } from './infrastructure/aws/device/repositories/device-repository.js';

const port = process.env.PORT ?? 3000;

export async function main() {
	logger.info(`Starting application...`);

	const db = await initORM();
	await db.orm.schema.refreshDatabase();
	await db.orm.seeder.seed(TestSeeder);

	const dbRepository = db.deviceRepository;
	const awsDeviceRepository = new AwsDeviceRepository();

	const server = createServer((request: IncomingMessage, response: ServerResponse) => {
		deviceRouter(request, response, dbRepository, awsDeviceRepository);
	});

	server.listen(port, () => {
		logger.info(`Server is running on port ${port}.`);
	});
}
