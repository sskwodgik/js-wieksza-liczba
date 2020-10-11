let num1 = 2;
let num2 = 5;

function ktoraWieksza(num1, num2){
    if(num1 > num2){
        let str = "Liczba num1: "+num1+" jest większa od liczby num2: "+num2;
        return str;
    }   else if(num2 > num1){
        let str = "Liczba num2: "+num2+" jest większa od liczby num1: "+num1;
        return str;
    }   else    {
        let str = "Liczby num1 oraz num2 są równe ("+num1+", "+num2+")";
        return str;
    }
}

console.log(ktoraWieksza(num1, num2));