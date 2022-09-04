/** @type {import("jest").Config} */
const config = {
	extensionsToTreatAsEsm: [".ts"],
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
