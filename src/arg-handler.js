exports.argv = require("yargs")(process.argv.slice(2))
  .scriptName("ocrp3generator")
  .usage("$0 [-o|--output output_dir] [-i --inputDir]")
  .defaults("o", "../dist", "The output directory where the generated files will be saved")
  .defaults("i", "../resources", "The input directory from where the resource images will be copied")
  .help().argv;
