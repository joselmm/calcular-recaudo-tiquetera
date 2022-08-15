var $desde_inventario_inicial = document.getElementById("desde-inventario-inicial");
var $hasta_inventario_inicial = document.getElementById("hasta-inventario-inicial");
var $desde_inventario_final = document.getElementById("desde-inventario-final");
var $hasta_inventario_final = document.getElementById("hasta-inventario-final");
var $headTablePrinted = document.querySelector("#impresas");
var $pantallaTotalInicial = document.getElementById("pantalla-total-inicial");
var $pantallaTotalFinal = document.getElementById("pantalla-total-final");
var $pantallaTotalImpresas = document.getElementById("pantalla-total-impresas");
//sacar calculo

function sumarImpresos(){
    var sumaImpresos = 0;
    for (let elem = 0; elem < $headTablePrinted.children.length; elem++) {
        
        sumaImpresos = Number($headTablePrinted.children[elem].children[1].children[0].value) + sumaImpresos
    }
    return sumaImpresos;
}

function calcularTotalInicial(){
    if(Number($hasta_inventario_inicial.value) > Number($desde_inventario_inicial.value) && Number($desde_inventario_inicial.value)>0){
    var totalInicial = Number($hasta_inventario_inicial.value) - Number($desde_inventario_inicial.value) + 1
    return totalInicial
    } else{
        return false
    }
}

function calcularTotalFinal(){
    if(sumarImpresos() <= calcularTotalInicial()){
    var totalFinal = calcularTotalInicial() - sumarImpresos();
    return totalFinal
    } else{
        console.log("dsad")
        $desde_inventario_final.value=false
        $pantallaTotalFinal.innerHTML=false
        return false
    }
    
}

function calcularDesdeFinal(){
    if(Number($desde_inventario_inicial.value)>=0 && sumarImpresos() < calcularTotalInicial()){
        var desde_inventario_final = Number($desde_inventario_inicial.value) + sumarImpresos();
        return desde_inventario_final;
    }else{
        console.log("dsad")
        $desde_inventario_final.value=false
        $pantallaTotalFinal.innerHTML=false
        return false
    
    }
}

$desde_inventario_inicial.addEventListener("input",()=>{

    if($hasta_inventario_inicial.value){

        $pantallaTotalInicial.innerHTML=calcularTotalInicial();
        
        if(calcularTotalInicial()){
            $desde_inventario_final.value=calcularDesdeFinal();
            $pantallaTotalFinal.innerHTML=calcularTotalFinal();
        }

    }


})




$hasta_inventario_inicial.addEventListener("input",()=>{

    $hasta_inventario_final.value=$hasta_inventario_inicial.value
    $pantallaTotalInicial.innerHTML=calcularTotalInicial();
    if(Number($hasta_inventario_inicial.value)>Number($desde_inventario_inicial.value)){

        
        if(calcularTotalInicial()){
            $desde_inventario_final.value=calcularDesdeFinal();
            $pantallaTotalFinal.innerHTML=calcularTotalFinal();
        }

    }


})


for (let elem = 0; elem < $headTablePrinted.children.length; elem++) {
        
    $headTablePrinted.children[elem].children[1].children[0].addEventListener("input",()=>{
        
            $pantallaTotalFinal.innerHTML=calcularTotalFinal();
            $desde_inventario_final.value=calcularDesdeFinal();
            $pantallaTotalImpresas.value=sumarImpresos();
        
    })
}

//
//children[input].children[1].children[0].value

