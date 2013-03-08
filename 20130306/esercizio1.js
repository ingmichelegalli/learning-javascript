function identity(n){
var s='';
	for(var i=0;i<=n;i++){
for(var j=0;j<=n;j++){
	if(i===j){
	
	s+=1+"\t";
	}
	else{
s+=0+"\t";
	}
	
}
s+="\n"
	}
return s;
}