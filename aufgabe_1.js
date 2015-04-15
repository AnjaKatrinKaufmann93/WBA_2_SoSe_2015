var fs = require('fs');
var data;
fs.readFile("Wolkenkratzer.json", function(err, data){
  if(err) throw err;
  
  data =JSON.parse(data);
  data = JSON.stringify(data);

  console.log(data);


});
