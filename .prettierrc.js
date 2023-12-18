module.export = {
    printWidth: 80,
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    trailingComma: "es5",
    ovverrides: [
        {
            files: "*.test.js",
            options: {
                semi: false,
            },
        },
        {
            files: ["*.html", "legacy/**/*.js"],
            options: {
                singleQuote: false,
                tabWidth: 2,
            },
        },
    ],
};