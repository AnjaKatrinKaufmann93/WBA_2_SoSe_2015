var fs = require('fs');
var chalk = require('chalk');

var body;

fs.readFile("Wolkenkratzer.json", function(err, data){
  if(err) throw err;

  body = JSON.parse(data);


  for (var i=0; i<body.wolkenkratzer.length; i++){
    console.log(chalk.cyan(body.wolkenkratzer[i].name));
    console.log(body.wolkenkratzer[i].stadt);
    console.log(body.wolkenkratzer[i].hoehe);
    console.log("-----------------------");
  }



});
