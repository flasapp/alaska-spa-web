import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path, { resolve } from 'path'
import createFile from 'vite-plugin-create-file';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    createFile({
      files: [
        {
          fileName: '.htaccess',
          content: `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
          `.trim(),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
			'@': path.resolve(__dirname, './src'),
			"./runtimeConfig": "./runtimeConfig.browser",
		},  
  },
  server: {
    historyApiFallback: true,
  }
  
})
