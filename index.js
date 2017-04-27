var http = require ('http');
http.createServer(function(req , res){
    res.writeHeader(200);
    res.end(JSON.stringify(array));
}).listen(8080);

var eventEmitter = require('events'),
    dart = require('./dart'),
    dart1 = new dart();

dart1.on("fallThrow", fallMessage);
dart1.on("successThrow",successMessage);
dart1.on("dartsChange" ,details);
dart1.on("dartsChange",checkDarts);
dart1.on ("dartsChange", function(){
    checkGoal(this ,1000);
});

var array =[];

function fallMessage(){
  array.push("miss a target");
}
function successMessage(){
  array.push("hit a target");
}
function details (){
  console.log (`Name : Shani Zilkha`);
  console.log(`Sport Type : Darts`);
  console.log (`Current Number  : ${this.throwing}`);
  array.push("shani zilkha");
  array.push("Darts");
}
function checkDarts(){
  if (this.throwing < 0 ){
     console.log (`Error!!The answer is under 0: ${this.throwing}`);
  }
}
function checkGoal(acc,goal){
  if (acc.throwing > goal){
     console.log(`Current Number: ${acc.throwing}`);
  }
}

dart1.DartsHit(12);
dart1.DartsMiss(5);

console.log(array);