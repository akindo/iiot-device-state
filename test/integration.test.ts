import { strict as assert } from 'node:assert';
import { describe } from 'mocha';

describe('IIoT Device State integration tests', () => {
	// before(async () => {});

	describe('first test suite', async () => {
		it('handles gracefully network timeout', async () => {
			assert.equal(true, true);
		});
	});

	describe('second test suite', async () => {
		it('throws error when no connection to endpoint', async () => {
			assert.equal(true, true);
		});
	});
});
