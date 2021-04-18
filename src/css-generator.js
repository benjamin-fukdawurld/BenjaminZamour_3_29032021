const fs = require("fs/promises");

const sass = require('sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

exports.render = (styleDir, outputDir, outputStyle = "expanded") => {
    return new Promise((resolve, reject) => {
        try {
            let result = sass.renderSync({
                file: styleDir + "/main.scss",
                sourceMap: outputDir + "/main.css.map",
                outFile: outputDir + "/main.css",
                includePaths: ["scss"],
                outputStyle
            });

            resolve(result);
        } catch(err) {
            reject(err);
        }
    })
    .then((result) => {
        return postcss([ autoprefixer ]).process(
                result.css.toString(),
                {
                    from: styleDir + "/main.scss",
                    to: outputDir + "/main.css",
                    map: {
                        prev: result.map.toString(),
                        inline: false
                    }
                }
            ).then(postCssResult => {
            postCssResult.warnings().forEach(warn => {
              console.warn(warn.toString())
            })
            return Promise.all(
                [fs.writeFile(outputDir + "/main.css", postCssResult.css.toString()),
                fs.writeFile(outputDir + "/main.css.map", postCssResult.map.toString())]
            )
          });
    })
    .then(() => console.log("CSS generation success"))
}