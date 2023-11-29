resultado = document.getElementById('resultado')
btn = document.querySelectorAll(".btn")

    function insert(num){
        var numero = resultado.innerHTML
        resultado.innerHTML = numero + num
    }

    function clean(){
        resultado.innerHTML = " "
    }

    function back(){
        var resultado = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
        
    }

    function calcular (){
        var resultado = document.getElementById('resultado').innerHTML
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
        }else{
            document.getElementById('resultado').innerHTML = "Error"
        }
    }