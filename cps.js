function myFunction(x, callback){
	callback(x);
}

var answer = 0;
function myFunction(10, function(x){ // callback1
	var result = x*x;
	myFunction(result, function(x){
		var result2 = x+x;
			myFunction(result2, function(x){
				answer = x+100;
				console.log(answer);
			})
	})
});
