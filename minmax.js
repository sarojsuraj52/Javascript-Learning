var arr = [3,2,1,56,1000,167];
var n=6;
var minmax = [];
var i;
var min=arr[0];
var max=arr[0];
 for(i=0; i<n;i++){
     if(arr[i]> max){
         max = arr[i];
     }
     else if(arr[i]<min){
         min = arr[i];
     }
 }
//  minmax.push(min);
//  minmax.push(max);
 console.log(minmax=[min,max])