//Get all the countries from Asia continent /region using Filter function
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    //console.log(result);
    // var res = result.filter((ele)=>ele.region==="Asia")
    //  var final = res.forEach((ele)=>console.log(ele.name.common))

// var res1=result.filter((ele)=>ele.population>200000)
// var final1=res1.forEach((ele)=>console.log(ele.name.common))
// var result1 = result.forEach((ele)=>console.log(ele.name.common,+" "+ele.capital,+" ",ele.flags.svg))
// var a=result.forEach((ele)=>console.log(ele.population))
// var sum=0
// var result2=result.reduce((sum,population)=>{
// return sum+=+population
// },0)
// console.log(result2)
// var curr= result.filter((ele)=>ele.currencies && ele.currencies.USD)
// curr.forEach((value)=>console.log(value.name.common))
}