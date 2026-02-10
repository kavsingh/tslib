import compat from "eslint-plugin-compat";
import n from "eslint-plugin-n";
import security from "eslint-plugin-security";
import { defineConfig } from "eslint/config";
import { configs as tsEslint } from "typescript-eslint";

const scriptSettings = {
	browserslistOpts: { env: "scripts" },
	node: { version: 24 },
};

const srcSettings = {
	browserslistOpts: { env: "src" },
	node: { version: 20 },
};

// oxlint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default defineConfig(
	{ ignores: ["tmp/*", "dist/*", "reports/*"] },

	tsEslint.base,
	compat.configs["flat/recommended"],
	n.configs["flat/recommended"],
	// @ts-expect-error upstream types
	security.configs.recommended,

	{
		settings: { ...scriptSettings, lintAllEsApis: true },
		rules: { "n/no-missing-import": "off" },
	},

	{ files: ["src/**/*.ts"], settings: srcSettings },

	{
		files: [
			`**/*.test.ts`,
			"**/__{test,tests,mocks,fixtures}__/**/*.ts",
			"**/__{test,mock,fixture}-*__/**/*.ts",
		],
		settings: scriptSettings,
	},
);
