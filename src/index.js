#!/usr/bin/env node

const fs = require("fs");

const argHandler = require('./arg-handler')
const resourcesGenerator = require("./resources-generator");
const htmlGenerator = require("./html-generator");
const cssGenerator = require("./css-generator");

const config = {
    outputDir: argHandler.argv.o,
    resourcesDir: argHandler.argv.i,
    templateDir: argHandler.argv.t,
    styleDir: argHandler.argv.s
}

let distDirStats = null;
try {
    distDirStats = fs.statSync(config.outputDir);
} catch (error) {
    fs.mkdirSync(config.outputDir);
    distDirStats = fs.statSync(config.outputDir);
}

if (!distDirStats.isDirectory())
{
    throw new Error("dist is not a directory");
}

let distCssDirStats = null;
try {
    distCssDirStats = fs.statSync(config.outputDir + "/css");
} catch (error) {
    fs.mkdirSync(config.outputDir + "/css");
    distCssDirStats = fs.statSync(config.outputDir + "/css");
}

if (!distDirStats.isDirectory())
{
    throw new Error("dist is not a directory");
}

resourcesGenerator.install(config.resourcesDir, config.outputDir)
    .then(() => htmlGenerator.render(config.templateDir, config.outputDir))
    .then(() => cssGenerator.render(config.styleDir, config.outputDir + "/css"))
    .catch((err) => {
        throw new Error(err);
    });
