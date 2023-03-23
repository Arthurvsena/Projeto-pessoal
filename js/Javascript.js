$('.logo').click(function(){
    $('.menu-responsivo').slideToggle();
})


function dat(){
    var data = new Date()
    var mes = document.querySelector("#mes");
    var dianum = document.querySelector("#dianum");
    var ano = document.querySelector("#ano");

    dianum.innerHTML = data.getDay();
    mes.innerHTML = data.getMonth();
    ano.innerHTML = data.getFullYear();

}

function relogio(){
    var data = new Date()
    var hora = document.querySelector("#hora");
    var minutos = document.querySelector("#minutos");
    var segundos = document.querySelector("#segundos");
    var min = data.getMinutes();
    var hr = data.getHours();
    var seg = data.getSeconds();

    console.log(min);

    if(min < 10){
        min = "0" + data.getMinutes();
    }
    if(hr < 10){
        hr = "0" + data.getHours();
    }
    if(seg < 10){
        seg = "0" + data.getSeconds();
    }

    hora.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;
}



setInterval(
    function(){ 
         relogio()
    }, 
    1000);

relogio();
dat();