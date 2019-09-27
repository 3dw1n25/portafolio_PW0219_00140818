function ran(array = []){
   
   var x= prompt("ingrese uin valor");
    
    
    
    for(i=0; i<20; i++){
        array[i] = Math.floor(Math.random()*10);
    }

    if(array.includes(x)){
        console.log("usted a ganados, es paloma");
    }
}