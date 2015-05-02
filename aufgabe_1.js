var fs = require('fs');
var chalk = require('chalk');

var body;
var data_sorted;


fs.readFile("Wolkenkratzer.json", function(err, data){
  if(err) throw err;

  body = JSON.parse(data);


  for (var i=0; i<body.wolkenkratzer.length; i++){
    console.log(chalk.cyan(body.wolkenkratzer[i].name));
    console.log(body.wolkenkratzer[i].stadt);
    console.log(body.wolkenkratzer[i].hoehe);
    console.log("-----------------------");
  }

  body.wolkenkratzer.sort(function (a,b){
    return a.hoehe-b.hoehe;
  });

  data_sorted = JSON.stringify(body);

  fs.writeFile("wolkenkratzer_sortiert.json",data_sorted, function(err) {
    if(err) throw err;
    for (var i=0; i<body.wolkenkratzer.length; i++){
      console.log(chalk.blue(body.wolkenkratzer[i].name));
      console.log(body.wolkenkratzer[i].stadt);
      console.log(body.wolkenkratzer[i].hoehe);
      console.log("-----------------------");
    }
  });




});
