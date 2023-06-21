let a = [2,4,7,9,10,11,24,55,61,72,90,98,99];
const b=2;
let count =0;
for(let i=0;i<a.length;i++){
    if(a[i]%b==0){
            count=count+1;
    }
}