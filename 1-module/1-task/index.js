function factorial(n){
    let x = 1;
    for (let i=1; i<n; i++){
      x = x*(i + 1);
    }
    return x;
 }

alert(factorial(0));
alert(factorial(1));
alert(factorial(3));
alert(factorial(5));