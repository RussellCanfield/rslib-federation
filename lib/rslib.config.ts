import { defineConfig } from "@rslib/core";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

const shared = {
	dts: {
		bundle: false,
	},
};

export default defineConfig({
	lib: [
		{
			...shared,
			format: "esm",
			output: {
				distPath: {
					root: "./dist/esm",
				},
			},
		},
		{
			...shared,
			format: "cjs",
			output: {
				distPath: {
					root: "./dist/cjs",
				},
			},
		},
		{
			...shared,
			format: "mf",
			output: {
				distPath: {
					root: "./dist/mf",
				},
				assetPrefix: "http://localhost:3001/mf",
			},
			plugins: [
				pluginModuleFederation({
					name: "lib",
					exposes: {
						".": "./src/index.ts",
					},
				}),
			],
		},
	],
});
