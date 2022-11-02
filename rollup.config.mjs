import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import _swc from "rollup-plugin-swc";

import pkg from "./package.json" assert { type: "json" };

const { default: swc } = _swc;
const extensions = [".mts", ".mjs", ".cts", ".cjs", ".ts", ".js"];
const { exports } = pkg;

/** @type {import("rollup").RollupOptions[]} */
export default [
	{
		input: "./src/index.ts",
		output: [
			{ file: exports["."].import, format: "es" },
			{ file: exports["."].require, format: "cjs" },
		],
		plugins: [resolve({ extensions }), commonjs(), swc()],
	},
	{
		input: "./tmp/index.d.ts",
		output: [{ file: exports["."].types, format: "es" }],
		plugins: [dts()],
	},
];
