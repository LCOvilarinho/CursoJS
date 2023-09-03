let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores) - [ 8, 1, 7, 4, 2, 9 ] - Forma Padrão
/*
console.log(valores[0]) - 8
console.log(valores[1]) - 1
console.log(valores[2]) - 7
console.log(valores[3]) - 4
console.log(valores[4]) - 2
console.log(valores[5]) - 9
*/

/*  Com a repetição FOR
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Mais simplificada
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}` )
}
