//arreglos o arrays

const numeros = [10,20,30,40,50];

console.table(numeros);

// const arreglos = ['hola',10,true,'si', null, {nombre:'Brandon', trabajo:'programador'},[1,2,3,4]];
// console.table(arreglos)

// acceder a los valores de un arreglo
// console.log(numeros[4]);

//conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function (numeros){
//     console.log(numeros);
// });


numeros.push(60,70,80);//elementos al final

numeros.unshift(-10,-20,-30);//al inicio del arreglo

console.table(numeros);

const meses=['Enero', 'Febrero', 'Marzo','Abril','Mayo'];
meses.splice(2,1); // recorre el arreglo y a partir del dos(marzo) elimina solo un valor (marzo)

// meses.pop();
// meses.shift();

console.table (meses)

// rest operator o spread Operator

const nuevoArreglo = [...meses, 'Junio'];
console.table(nuevoArreglo);