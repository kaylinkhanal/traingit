sum=0
const arr=[3,5,6,7,8,10,15]
arr.map((item,id)=> {
  if(item%5==0){
    sum=sum+item
    return item
  }else{
    return "hello"
  }
  //return item
})
console.log(sum)