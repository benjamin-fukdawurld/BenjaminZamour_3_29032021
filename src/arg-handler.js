exports.argv = require("yargs")(process.argv.slice(2))
  .scriptName("ocrp3generator")
  .usage("$0 [-o|--output output_dir] [-i --input] [-t|--template template_dir] [-s|--style style_dir]")
  .defaults("o", "../dist", "The output directory where the generated files will be saved")
  .alias("o", "output")
  .defaults("i", "../resources", "The input directory from where the resource images will be copied")
  .alias("i", "input")
  .defaults("t", __dirname + "/templates", "The directory from where the ejs templates are stored")
  .alias("t", "template")
  .defaults("s", __dirname + "/scss", "The directory from where the scss style files are stored")
  .alias("s", "style")
  .alias("h", "help")
  .help().argv;
