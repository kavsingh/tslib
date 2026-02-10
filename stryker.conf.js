// oxlint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default {
	mutate: ["src/**/*.ts", "!src/**/*@(.test|.spec|.mock).ts"],
	testRunner: "command",
	commandRunner: { command: "pnpm t" },
	reporters: ["progress", "clear-text", "html"],
	coverageAnalysis: "all",
};
