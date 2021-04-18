const fs = require("fs-extra");

exports.install = (outputDir) => {
    return fs.copy("../resources", outputDir, { overwrite: true })
        .then(() => {
            console.log("Resouces installation success")
        });
};