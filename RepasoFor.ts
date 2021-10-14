function numerosImpares(numero:number){

    for(let i=0;i<numero;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}

numerosImpares(15);


//5. Función que recibe como parámetro un array de strings que contenga colores y te diga en cada caso si el color está en el arcoiris o no.
function colorArcoiris(array:string[]){

    let arcoIris:string[]=new Array("rojo", "naranja", "amarillo", "verde", "añil", "azúl", "violeta");

    for(let i=0;i<array.length;i++){
        if(array[i]==arcoIris[i]){
            console.log("El "+array[i]+" sí está en el arco iris.");
        }else{
            console.log("El "+array[i]+" no está en el arco iris.")
        }
    }
}
let colores:string[]=new Array("marrón", "naranja", "amarillo", "negro", "gris", "azúl", "violeta");
colorArcoiris(colores);

//6. Función que te devuelve si existe un número par en el array de números que introduces como parámetro de entrada.
function existePar(array:number[]):boolean{
    let existe:boolean=false;
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            existe=true;
        }
    }
    return existe;
}
let arrayNumeros:number[]=new Array(3, 4, 6, 7,12, 90, 56);
console.log(existePar(arrayNumeros));

//7. Función que recibe array de nombres y devuelve verdadero si todos empiezan por M
function empiezaPorM(array:string[]):boolean{
    let empiezaM:boolean=false;
    for(let i=0;i<array.length;i++){
        if(array[i][0]=="M"){
         empiezaM=true;
       
        }else{
            empiezaM=false;
            break;
        }
    }
    return empiezaM;
}
let nombres:string[]=new Array("Esther", "Ana", "Pedro", "Juan", "Marta", "María");
console.log(empiezaPorM(nombres));

//8. Función que devuelve la suma del número de caracteres de las palabras almacenadas en un array.
function sumaCaracteres(array:string[]):number{

    let contCaracter:number=0;

    for(let i=0;i<array.length;i++){

        contCaracter+=array[i].length;
    }
    return contCaracter;  
}


