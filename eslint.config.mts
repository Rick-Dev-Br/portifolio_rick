import js from '@eslint/js'
import globals from 'globals'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import jestPlugin from 'eslint-plugin-jest'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  // Configuração base + Prettier
  {
    ...js.configs.recommended,
    plugins: {
      prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'none',
          semi: false,
          singleQuote: true
        }
      ],
      'no-console': 'warn'
    }
  },

  // Configuração TypeScript
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'),
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },

  // Configuração React
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },

  // Configuração Jest para testes
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    plugins: {
      jest: jestPlugin
    },
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-unused-expressions': 'off'
    }
  },

  // Ignorar arquivos
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/.next',
      '**/*.config.js',
      '**/*.config.ts',
      'vite.config.ts',
      '**/build',
      '**/coverage'
    ]
  }
]
