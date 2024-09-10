import 'reflect-metadata';
import { main } from './main.js';
import { getErrorMessage } from './utils/error-handling.js';

try {
	await main();
} catch (error) {
	throw new Error('Error starting main(): ' + getErrorMessage(error));
}
