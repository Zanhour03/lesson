var numbers = []

    for( let i = 1; i < 11; i++)
    {
        
        if(numbers.length < 11){
           
            var RNR = Math.floor(Math.random() * 100);
           
            if(!numbers.push(RNR))
            {
               numbers.push(RNR);
            }
        }
    }
    numbers.sort(function(a,b){return a-b});
console.log(numbers)

var number = []

    for( let i = 1; i < 11; i++)
    {
        
        if(number.length < 11){
           
            var RNR = Math.floor(Math.random() * 100);
           
            if(!number.push(RNR))
            {
               number.push(RNR);
            }
        }
    }
   
console.log(number)

document.getElementById("a").innerHTML=number[0];
document.getElementById("b").innerHTML=number[1];
document.getElementById("c").innerHTML=number[2];
document.getElementById("d").innerHTML=number[3];
document.getElementById("e").innerHTML=number[4];
document.getElementById("f").innerHTML=number[5];
document.getElementById("g").innerHTML=number[6];
document.getElementById("h").innerHTML=number[7];
document.getElementById("i").innerHTML=number[8];
document.getElementById("j").innerHTML=number[9];
  
document.getElementById("1").innerHTML=numbers[0];
document.getElementById("2").innerHTML=numbers[1];
document.getElementById("3").innerHTML=numbers[2];
document.getElementById("4").innerHTML=numbers[3];
document.getElementById("5").innerHTML=numbers[4];
document.getElementById("6").innerHTML=numbers[5];
document.getElementById("7").innerHTML=numbers[6];
document.getElementById("8").innerHTML=numbers[7];
document.getElementById("9").innerHTML=numbers[8];
document.getElementById("10").innerHTML=numbers[9];

