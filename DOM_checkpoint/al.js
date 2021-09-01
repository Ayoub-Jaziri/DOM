var tab1=[1,7,8];
var tab2=[1,5,2];
var sum=0;
for (let i =0 ; i < tab1.length-1 ; i=i+1) {
  for (let j = 0; j < tab2.length; j++) {
    if (tab1[i]!=tab2[j]){
    sum= sum+tab2[j]
    j=j+1
} 

}
    
}
sum = sum*2
console.log(sum)