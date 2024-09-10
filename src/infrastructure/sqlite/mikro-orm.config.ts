import { SeedManager } from '@mikro-orm/seeder';
import { defineConfig, type Options } from '@mikro-orm/sqlite';

const options: Options = {};

export default defineConfig({
	// for simplicity, we use the SQLite database, as it's available pretty much everywhere
	dbName: 'sqlite.db',
	// folder based discovery setup, using common filename suffix
	entities: ['dist/**/*.entity.js'],
	entitiesTs: ['src/**/*.entity.ts'],
	// enable debug mode to log SQL queries and discovery information
	debug: true,
	// for vitest to get around `TypeError: Unknown file extension ".ts"` (ERR_UNKNOWN_FILE_EXTENSION)
	dynamicImportProvider: async (id) => import(id),
	// for highlighting the SQL queries
	//   highlighter: new SqlHighlighter(),
	extensions: [SeedManager],
	...options,
});
