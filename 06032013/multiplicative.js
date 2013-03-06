
document.writeln("<table>");
var array = new Array("1","2","3","4","5","6","7","8","9","10");


for(var i=1;i<array.length;i++){
document.writeln("<tr>");
	
for(var j=0;j<array.length;j++){

document.writeln("<td>"+array[j]*i+",</td>");

	}
document.writeln("</tr>");
}
document.writeln("</table>");
