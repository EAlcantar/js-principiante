
//Imprime la sucesión de Fibonacci n veces

function fibo(number) {
    var a = 0, b = 1, c, s = 1;

    console.log(b);
    for (i = 3; i <= number; i++) {
        c = a + b;
        console.log(c);
        s = s + c;
        a = b;
        b = c;
    }
}

fibo(20)