import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'
import neostandard from 'neostandard'
import reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  ...neostandard(),
  globalIgnores(['node_modules',
    '.next',
    'out',
    'build',
    'dist',
    'next-env.d.ts']),
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
])
