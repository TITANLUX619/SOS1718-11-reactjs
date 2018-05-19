module.exports = {
    "extends": ["eslint:recommended",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    }
}
