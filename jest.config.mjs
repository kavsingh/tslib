/** @type {import("jest").Config} */
const config = {
	// fixes resolution of imports with extensions,
	// required by ESM NodeNext resolution
	resolver: "ts-jest-resolver",
	extensionsToTreatAsEsm: [".ts", ".mts"],
	transform: { "^.+\\.ts$": "@swc/jest" },
	testRegex: "^.+\\.test\\.ts$",
	collectCoverageFrom: ["src/**/*"],
	coveragePathIgnorePatterns: [
		"/__fixtures__/",
		"/__mocks__/",
		"/__test__/",
		"/^types.ts$/",
		"/^.test.ts$/",
		"/^.d.ts$/",
		"/^types.mts$/",
		"/^.test.mts$/",
		"/^.d.mts$/",
	],
};

export default config;
