//4. Función que recibe array como parámetro de entrada y devuelve el array invertido

function arrayInvertido(array:string[]):string[]{

    let arr:string[]=new Array();

let i:number=0;
    while(i<array.length){
        arr.unshift(array[i]);
        i++;
    }
    return arr;
}


let array:string[]=new Array("Pedro", "Esther", "Ana", "Juan");
console.log(arrayInvertido(array));
