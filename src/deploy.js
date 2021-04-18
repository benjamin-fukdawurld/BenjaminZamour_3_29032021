var ghpages = require('gh-pages');

const argv = require("yargs")(process.argv.slice(2))
  .scriptName("ocrp3deployer")
  .usage("$0 <dist_dir>", "deploy <dist_dir> on GitHub pages", (yargs) => {
    yargs.positional('dist_dir', {
        describe: 'The directory to deploy on GitHub pages',
        type: 'string'
      })
  })
  .example('$0 dist', 'deploy the dist directory to GitHub pages')
  .alias("h", "help")
  .help().argv;
  
ghpages.publish(argv.dist_dir, function(err) {
    if(err){
        throw new Error("Unable to deploy project on github pages: " + err);
    }

    console.log(`'${argv.dist_dir}' deployed`);
});