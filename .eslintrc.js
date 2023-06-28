module.exports = {
    env: {
        browser: true,
        es2021: true,
        'react-native/react-native': true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.eslint.json',
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        '@react-native-community',
        'prettier',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension
            env: {
                node: true,
            },
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    plugins: ['react', 'react-native', '@typescript-eslint'],
    rules: {
        'no-console': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '_',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': [
            'error',
            { allow: ['arrowFunctions'] },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: {
                    attributes: false,
                    arguments: false,
                    variables: false,
                },
            },
        ],
        'prettier/prettier': 'error',
    },
};
