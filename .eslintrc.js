// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
     plugins: [
   'html' //插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ],
    "rules": {
        "no-extra-semi": "error",
        "no-unreachable": "error",
        "no-multi-spaces": "error",
        "block-spacing": [
            "error",
            "always"
        ],
        "keyword-spacing": [
            "error", {
                "before": true,
                "after": true
            }
        ],
        "no-lonely-if": [
            "error"
        ],
        "no-multiple-empty-lines": [
            "error", {
                "max": 1
            }
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "no-unneeded-ternary": [
            "error"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "no-self-assign": [
            "error"
        ],
        "no-self-compare": [
            "error"
        ],
        "no-unused-labels": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-return-assign": [
            "error"
        ],
        "no-class-assign": [
            "error"
        ],
        "no-fallthrough": [
            "error"
        ],
        "no-invalid-this": [
            "error"
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-loop-func": [
            "error"
        ]
    }
}
