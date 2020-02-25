function ask(question, yes, no){
	if(prompt(question)) yes();
	else no();
}
function showOk(){
	console.log("You agreed.");
}
function showCancel(){
	console.log("you cancelled the execution.");
}

// Usage: functions showOk, showCancel are passed as arguments to ask.

ask("Do you agree?", showOk, showCancel);