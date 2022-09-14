let str="naman";
let i=0;
let bag="";

for(i=str.length-1;i>=0;i--){
    bag=bag+str[i];
}
if(str==bag){
    console.log("Yes")
}else{
    console.log("No");
}