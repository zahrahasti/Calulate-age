import eslintConfigAntfu from '@antfu/eslint-config'
import eslintJS from '@eslint/js'
import eslintPLuginHTML from '@html-eslint/eslint-plugin'
import eslintHTMLParser from '@html-eslint/parser'
import eslintPluginStylistic from '@stylistic/eslint-plugin'
// next step install stylistic and ts rules
const htmlRules = {
  /* Best Practices */
  '@html-eslint/no-duplicate-id': 'error',
  '@html-eslint/require-doctype': 'error',
  '@html-eslint/no-obsolete-tags': 'error',
  '@html-eslint/no-duplicate-attrs': 'error',
  '@html-eslint/require-li-container': 'error',
  '@html-eslint/require-button-type': 'error',
  '@html-eslint/no-script-style-type': 'error',
  '@html-eslint/require-meta-charset': 'error',
  '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],

  /* SEO */
  '@html-eslint/require-lang': 'error',
  '@html-eslint/require-title': 'error',
  '@html-eslint/no-multiple-h1': 'error',
  '@html-eslint/require-meta-description': 'error',
  '@html-eslint/require-open-graph-protocol': 'error',

  /* Accessibility */
  '@html-eslint/require-img-alt': 'error',
  '@html-eslint/no-abstract-roles': 'error',
  '@html-eslint/no-accesskey-attrs': 'error',
  '@html-eslint/require-frame-title': 'error',
  '@html-eslint/no-aria-hidden-body': 'error',
  '@html-eslint/no-positive-tabindex': 'error',
  '@html-eslint/no-skip-heading-levels': 'error',
  '@html-eslint/require-meta-viewport': 'error',

  /* Style */
  '@html-eslint/quotes': 'error',
  '@html-eslint/lowercase': 'error',
  '@html-eslint/indent': ['error', 'tab'],
  '@html-eslint/no-trailing-spaces': 'error',
  '@html-eslint/id-naming-convention': 'error',
  '@html-eslint/no-multiple-empty-lines': 'error',
  '@html-eslint/element-newline': ['error', { skip: ['pre', 'code'] }],
  '@html-eslint/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: true }],
}

const jsRules = {
  'unused-imports/no-unused-vars': 'off',

  ...eslintJS.configs.recommended.rules,

  /* Possible Problems */
  'no-await-in-loop': 'error',
  'no-self-compare': 'error',
  'no-unreachable-loop': 'error',
  'no-inner-declarations': 'error',
  'array-callback-return': 'error',
  'no-useless-assignment': 'error',
  'no-constructor-return': 'error',
  'require-atomic-updates': 'error',
  'no-async-promise-executor': 'error',
  'no-template-curly-in-string': 'error',
  'no-promise-executor-return': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-use-before-define': ['error', 'nofunc'],
  'use-isnan': ['error', { enforceForIndexOf: true }],
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  /* Suggestions */
  'yoda': 'error',
  'strict': 'error',
  'no-var': 'error',
  'eqeqeq': 'error',
  'no-new': 'error',
  'no-eval': 'error',
  'no-void': 'error',
  'new-cap': 'error',
  'no-proto': 'error',
  'no-caller': 'error',
  'no-empty': 'error',
  'no-eq-null': 'error',
  'camelcase': 'error',
  'sort-imports': 'off',
  'no-redeclare': 'off',
  'complexity': 'error',
  'no-iterator': 'error',
  'no-lonely-if': 'error',
  'max-params': 'error',
  'no-shadow': ['error'],
  'no-label-var': 'error',
  'no-new-func': 'error',
  'no-multi-str': 'error',
  'guard-for-in': 'error',
  'no-loop-func': 'error',
  'default-case': 'error',
  'no-script-url': 'error',
  'prefer-const': 'error',
  'no-undefined': 'error',
  'no-undef-init': 'error',
  'require-await': 'error',
  'no-extra-bind': 'error',
  'prefer-spread': 'error',
  'dot-notation': ['error'],
  'no-lone-blocks': 'error',
  'no-extra-label': 'error',
  'accessor-pairs': 'error',
  'no-useless-call': 'error',
  'max-depth': ['error', 3],
  'no-implied-eval': 'error',
  'consistent-this': 'error',
  'no-octal-escape': 'error',
  'no-throw-literal': 'error',
  'prefer-template': 'error',
  'init-declarations': 'error',
  'no-new-wrappers': 'error',
  'block-scoped-var': 'error',
  'no-extend-native': 'error',
  'default-case-last': 'error',
  'object-shorthand': 'error',
  'no-useless-return': 'error',
  'consistent-return': 'error',
  'no-useless-concat': 'error',
  'no-nested-ternary': 'error',
  'no-useless-rename': 'error',
  'no-implicit-globals': 'error',
  'default-param-last': 'error',
  'symbol-description': 'error',
  'curly': ['error', 'multi-line'],
  'prefer-rest-params': 'error',
  'no-implicit-coercion': 'error',
  'radix': ['error', 'as-needed'],
  'func-name-matching': 'error',
  'operator-assignment': 'error',
  'no-unneeded-ternary': 'error',
  'no-array-constructor': 'error',
  'prefer-destructuring': 'error',
  'no-underscore-dangle': 'error',
  'prefer-object-spread': 'error',
  'no-object-constructor': 'error',
  'prefer-object-has-own': 'error',
  'no-useless-constructor': 'error',
  'class-methods-use-this': 'error',
  'prefer-numeric-literals': 'error',
  'no-useless-computed-key': 'error',
  'max-nested-callbacks': ['error', 3],
  'no-return-assign': ['error', 'always'],
  'prefer-named-capture-group': 'error',
  'no-bitwise': ['error', { int32Hint: true }],
  'prefer-exponentiation-operator': 'error',
  'import/extensions': ['error', 'ignorePackages'],
  'logical-assignment-operators': ['error', 'always'],
  'no-sequences': ['error', { allowInParentheses: false }],
  'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
  'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'prefer-arrow-callback': ['error', { allowUnboundThis: true }],
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'no-extra-boolean-cast': ['error', { enforceForInnerExpressions: true }],
  'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
  'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
  'no-restricted-exports': ['error', {
    restrictDefaultExports: {
      named: true,
      namedFrom: true,
      defaultFrom: true,
      namespaceFrom: true,
    },
  }],
  'no-magic-numbers': ['error', {
    enforceConst: true,
    ignoreDefaultValues: true,
    ignoreClassFieldInitialValues: true,
    ignore: [-100, -1, 0, 1, 2, 100],
  }],
}
const tsRules = {
  'ts/no-misused-promises': 'off',
  'ts/no-unsafe-assignment': 'off',
  'ts/strict-boolean-expressions': 'off',
  'ts/consistent-type-definitions': ['error', 'type'],
}
const stylisticRules = {
  'antfu/if-newline': 'off',
  ...eslintPluginStylistic.configs['recommended-flat'].rules,
  'style/no-tabs': 'off',
  'style/semi-style': 'error',
  'style/no-extra-semi': 'error',
  'style/spaced-comment': 'off',
  'style/indent': ['error', 'tab'],
  'style/arrow-parens': ['error', 'always'],
  'style/indent-binary-ops': ['error', 'tab'],
  'style/operator-linebreak': ['error', 'none'],
  'style/implicit-arrow-linebreak': ['error', 'beside'],
  'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
  'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'style/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
  'style/lines-around-comment': ['error', {
    allowTypeStart: true,
    allowEnumStart: true,
    allowClassStart: true,
    allowBlockStart: true,
    allowArrayStart: true,
    allowModuleStart: true,
    allowObjectStart: true,
    allowInterfaceStart: true,
  }],
  'style/member-delimiter-style': ['error', {
    multilineDetection: 'brackets',
    multiline: { delimiter: 'semi', requireLast: true },
    singleline: { delimiter: 'semi', requireLast: false },
  }],
  'style/padding-line-between-statements': [
    'error',
    {
      prev: '*',
      next: [
        'do',
        'try',
        'for',
        'iife',
        'with',
        'class',
        'block',
        'while',
        'throw',
        'return',
        'switch',
        'export',
        'function',
        'directive',
        'block-like',
        'cjs-export',
        'multiline-block-like',
      ],
      blankLine: 'always',
    },
    {
      prev: 'export',
      next: 'export',
      blankLine: 'any',
    },
    {
      prev: ['const', 'let', 'var'],
      next: 'block-like',
      blankLine: 'any',
    },
    {
      prev: 'block-like',
      next: '*',
      blankLine: 'always',
    },
    {
      prev: 'function-overload',
      next: 'function',
      blankLine: 'never',
    },
  ],
}
export default eslintConfigAntfu(
  {
    ignores: ['**/*.json', '**/env.d.ts'],
    typescript: { tsconfigPath: 'tsconfig.json' },
  },
  {
    files: ['**/*.{js,ts}'],
    rules: { ...jsRules, ...tsRules, ...stylisticRules },
  },
  {
    files: ['index.html'],
    plugins: { '@html-eslint': eslintPLuginHTML },
    languageOptions: { parser: eslintHTMLParser },
    rules: htmlRules,
  },
)
