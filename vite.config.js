import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path, { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
			'@': path.resolve(__dirname, './src'),
			"./runtimeConfig": "./runtimeConfig.browser",
		},  
  }
  
})
