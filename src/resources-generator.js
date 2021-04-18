const fs = require("fs-extra");

exports.install = (inputDir, outputDir) => {
    return fs.copy(inputDir, outputDir, { overwrite: true })
        .then(() => {
            console.log("Resouces installation success")
        });
};