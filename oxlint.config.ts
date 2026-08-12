import n from "eslint-plugin-n";
import security from "eslint-plugin-security";
import { defineConfig } from "oxlint";

import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = defineConfig({
	options: {
		typeAware: true,
		typeCheck: true,
		maxWarnings: 0,
		reportUnusedDisableDirectives: "deny",
	},
	ignorePatterns: [
		"**/dist/**",
		"**/gen/**",
		"**/dist-*/**",
		"**/reports/**",
		"**/target/**",
		"**/*.gen.*",
		"**/*.generated.*",
		"!**/__mocks__/*.gen.*",
		"!**/__mocks__/*.generated.*",
		"!**/__generated__/__mocks__/**",
		"**/pnpm-*.yaml",
	],
	plugins: ["oxc", "eslint", "typescript", "import", "unicorn", "promise"],
	categories: {
		correctness: "error",
		suspicious: "error",
		pedantic: "error",
		restriction: "error",
		perf: "error",
		style: "error",
		nursery: "error",
	},
	jsPlugins: ["eslint-plugin-n", "eslint-plugin-security"],
	env: { node: true },
	rules: {
		"oxc/no-async-await": "off",
		"oxc/no-optional-chaining": "off",
		"oxc/no-rest-spread-properties": "off",

		"eslint/arrow-body-style": "off",
		"eslint/capitalized-comments": "off",
		"eslint/curly": ["error", "multi-line", "consistent"],
		"eslint/eqeqeq": "error",
		"eslint/id-length": "off",
		"eslint/func-style": [
			"error",
			"declaration",
			{ allowTypeAnnotation: true },
		],
		"eslint/max-classes-per-file": "off",
		"eslint/max-lines-per-function": [
			"error",
			{ skipBlankLines: true, skipComments: true },
		],
		"eslint/no-console": "off",
		"eslint/no-continue": "off",
		"eslint/no-duplicate-imports": [
			"error",
			{ allowSeparateTypeImports: true },
		],
		"eslint/no-implicit-coercion": ["error", { allow: ["!!"] }],
		"eslint/no-inline-comments": ["error", { ignorePattern: "@type" }],
		"eslint/no-magic-numbers": "off",
		"eslint/no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"eslint/no-ternary": "off",
		"eslint/no-undefined": "off",
		"eslint/no-unused-vars": [
			"error",
			{
				args: "all",
				argsIgnorePattern: "^_",
				caughtErrors: "all",
				caughtErrorsIgnorePattern: "^_",
				destructuredArrayIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
		"eslint/no-void": ["error", { allowAsStatement: true }],
		"eslint/no-warning-comments": ["error", { terms: ["fixme", "revert"] }],
		"eslint/prefer-destructuring": "off",
		"eslint/sort-imports": "off",
		"eslint/sort-keys": "off",

		"typescript/consistent-type-imports": [
			"error",
			{ fixStyle: "separate-type-imports", prefer: "type-imports" },
		],
		"typescript/explicit-function-return-type": "off",
		"typescript/no-non-null-assertion": "error",
		"typescript/promise-function-async": "off",
		"typescript/restrict-template-expressions": [
			"error",
			{ allowNumber: true },
		],
		"typescript/strict-boolean-expressions": "off",
		"typescript/switch-exhaustiveness-check": [
			"error",
			{
				allowDefaultCaseForExhaustiveSwitch: true,
				considerDefaultExhaustiveForUnions: true,
				requireDefaultForNonUnion: true,
			},
		],

		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"import/extensions": "off",
		"import/max-dependencies": "off",
		"import/no-default-export": "error",
		"import/no-named-export": "off",
		"import/no-nodejs-modules": "off",
		"import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
		"import/prefer-default-export": "off",

		"unicorn/catch-error-name": ["error", { name: "cause" }],
		"unicorn/no-array-reduce": "off",
		"unicorn/no-useless-undefined": "off",
		"unicorn/prefer-node-protocol": "error",

		...n.configs.recommended.rules,
		...security.configs.recommended.rules,
	},
	overrides: [
		{
			files: ["**/typings/*.d.ts"],
			rules: {
				"import/unambiguous": "off",
			},
		},
		{
			files: ["*.config.{js,ts}"],
			rules: {
				"import/no-default-export": "off",
				"import/no-anonymous-default-export": "off",
			},
		},
		{
			files: ["src/**"],
			rules: {
				"import/no-default-export": "off",
				"import/no-anonymous-default-export": "off",
			},
		},
	],
});

export default config;
