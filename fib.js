const n = Number(prompt('Press number fib n'));
document.write(`fib number by for=` + fib(n) + `<br>`);
document.write(`fib number by array=` + fibArr(n) + `<br>`);
document.write(`fib number by recursion=` + fibRec(n) + `<br>`);

function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}




function fibArr(n) {
    var arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];

    }
    return arr[n - 1];
}




function fibRec(n) {
    return n <= 2 ? 1 : fibRec(n - 1) + fibRec(n - 2);
}
