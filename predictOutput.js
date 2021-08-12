function a(){
    console.log('hello');
}
console.log('Dojo');

// console.log = 'Dojo'

function a(){
    console.log('hello');
    return 15;
}
x = a();
console.log('x is', x);

// 'hello', 'x is' 15

function a(n){
    console.log('n is', n);
    return n+15;
}
x = a(3);
console.log('x is', x);

// 'x is' 3, 'x is' 18

function a(n){
    console.log('n is', n);
    y = n*2;
    return y;
}
x = a(3) + a(5);
console.log('x is', x);

// 'n is', 3, 'n is', 5, 'x is', 8,

function op(a,b){
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x);

// 'c is', 5, 'c is', 8, 'x is', 13

function op(a,b){
    c = a+b;
    console.log('c is', c);
    return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
console.log('x is', x)

