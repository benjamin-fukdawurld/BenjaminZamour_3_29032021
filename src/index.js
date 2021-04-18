const fs = require("fs");

const resourcesGenerator = require("./resources-generator");
const htmlGenerator = require("./html-generator");
const cssGenerator = require("./css-generator");

let distDirStats = null;
try {
    distDirStats = fs.statSync("../dist");
} catch (error) {
    fs.mkdirSync("../dist");
    distDirStats = fs.statSync("../dist");
}

if (!distDirStats.isDirectory())
{
    throw new Error("dist is not a directory");
}

let distCssDirStats = null;
try {
    distCssDirStats = fs.statSync("../dist/css");
} catch (error) {
    fs.mkdirSync("../dist/css");
    distCssDirStats = fs.statSync("../dist/css");
}

if (!distDirStats.isDirectory())
{
    throw new Error("dist is not a directory");
}

resourcesGenerator.install("../dist")
    .then(() => htmlGenerator.render("../dist"))
    .then(() => cssGenerator.render("../dist/css"))
    .catch((err) => {
        throw new Error(err);
    });
