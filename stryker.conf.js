export default {
	mutate: ["src/**/*.ts", "!src/**/*@(.test|.spec|.mock).ts"],
	testRunner: "command",
	commandRunner: { command: "bun test" },
	reporters: ["progress", "clear-text", "html"],
	coverageAnalysis: "all",
};
