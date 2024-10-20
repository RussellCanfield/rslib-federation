import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "app",
			filename: "remoteEntry.js",
			remotes: {
				lib: "lib@http://localhost:3001/mf/mf-manifest.json",
			},
		}),
	],
});
