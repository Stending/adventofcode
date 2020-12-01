let fs = require('fs');
var star1 = fs.readFileSync(__dirname + '/data/star1.txt', {encoding:'utf8', flag:'r'}); 
var input = star1.match(/[^\r\n]+/g);

for(var i=0;i<input.length;i++){
    var a = parseInt(input[i]);
    for(var j=0;j<input.length;j++){
        var b = parseInt(input[j]);
        for(var k=0;k<input.length;k++){
            var c = parseInt(input[k]);
            if(j!=i && i!=k != k!=j){
                if(a+b+c == 2020){
                    console.log("BRAVO : " + a*b*c);
                    return;
                }
            }
        }
    }
}
console.log("g ri1 trouver");
