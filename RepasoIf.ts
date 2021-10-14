//1. Función que dada una fecha de nacimiento devuelve el signo de zodiacal

function signoZodiacal(dia: number, mes:number):string{

    let  signo:string;
   
   switch(mes){
     
      
       case 1:
           if(dia<21){
               signo="Capricornio";
           }else{
               signo="Acuario";
           }
       break;
   
       case 2:
           if(dia<19){
               signo="Acuario";
           }else{
               signo="Piscis";
           }
       break;
   
       case 3:
           if(dia<21){
               signo="Piscis";
           }else{
               signo="Aries";
           }
       break;
   
       case 4:
           if(dia<21){
               signo="Aries";
           }else{
               signo="Tauro";
           }
       break;
   
       case 5:
           if(dia<21){
               signo="Tauro";
           }else{
               signo="Géminis";
           }
       break;
   
       case 6:
           if(dia<21){
               signo="Geminis";
           }else{
               signo="Cancer";
           }
       break;
   
       case 7:
           if(dia<23){
               signo="Cancer";
           }else{
               signo="Leo";
           }
       break;
   
       case 8:
           if(dia<25){
               signo="Leo";
           }else{
               signo="Virgo";
           }
       break;
   
       case 9:
           if(dia<24){
               signo="Virgo";
           }else{
               signo="Libra";
           }
       break;
   
       case 10:
           if(dia<24){
               signo="Libra";
           }else{
               signo="Escorpio";
           }
       break;
   
       case 11:
           if(dia<23){
               signo="Escorpio";
           }else{
               signo="Sagitario";
           }
       break;
   
       case 12:
           if(dia<22){
               signo="Sagitario";
           }else{
               signo="Capricornio";
           }
       break;
   
       default:
           signo="Fecha incorrecta";
   
   }
   return signo;
   }

   console.log(signoZodiacal(17, 3));

   //9. Función que imprime por consola si es par o impar el número introducido por parámetro.
function esParOimpar(numero:number){
    let frase:string;
    if(numero%2==0){
        frase="El número es par";
    }else{
        frase="El número es impar";
    }
    console.log(frase);
}
esParOimpar(8)
