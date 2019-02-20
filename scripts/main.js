var a = 550000000;
var b = 200;
var c = 0;
var d = 100;
var e = 100;
var f = 100;
var g = 154;

function forward (){
    a = a/10;
    document.querySelector('#distance').innerHTML = a + " km";
}

function days (){
    b = b-20;
    document.querySelector('#days').innerHTML = b + " days remaining";
}

function speed (){
    if (c<3){
        document.querySelector('#speed').innerHTML = "40 000 km/h";
    }
    if (c>=3){
        document.querySelector('#speed').innerHTML = "107 000 km/h";
    }
    if (c == 8){
        document.querySelector('#speed').innerHTML = "20 000 km/h";
    }
    if (c == 9){
        document.querySelector('#speed').innerHTML = "0 km/h";
        }
    }

function fuel(){
        d = d - 10;
        document.querySelector('.panelfuel').style.height = d + "%";
        }
function water(){
        e = e - 10;
        document.querySelector('.panelwater').style.height = e + "%";
}
function food(){
        f = f - 10;
        document.querySelector('.panelfood').style.height = f + "%";
}
    
function rocket(){
        g = g - 15.4;
        document.querySelector('.rocket img').style.marginTop = g + "%";
}
 
window.onclick = function() {
        forward();
        days();
        speed();
        fuel();
        water();
        food();
        rocket();
        c++;
        console.log(c);
    
    };
