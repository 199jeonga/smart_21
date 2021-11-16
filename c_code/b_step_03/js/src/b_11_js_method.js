//b_11_js_method.js

var nList = [1, 2, 3, 4, 5, 6, 7];
var filterList=[];

filterList = nList.filter(function(d,i,k){
	console.log(d,i,k)
	if(d>4){
		return d;
	}
});