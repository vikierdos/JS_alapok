window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles4();
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("#f1")[0];
    const ELEMtartalma = ELEM.innerHTML;
    console.log(ELEMtartalma);
}
function elemekElerese2() {
    const ELEM=document.querySelectorAll("#ide")[0];
    ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
    const ELEM=document.querySelectorAll(".ide")[0];
    ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
    const listaELEM = document.querySelector(".lista");
    let txt = `<ul>`;
    for (let index = 0; index < 5; index++) {
        var szam = Math.random() * (31 -10) + 10;
        txt +=`<li>${Math.floor(szam)}</li>`;
    }
    txt += `</ul>`;
    listaELEM.innerHTML += txt;
}
function elemekFormazasa1(){
    const listaELEM = document.querySelector(".lista");
    listaELEM.classList.add("formazott");
}

function esemenyKezeles1(){
    const listaELEM = document.querySelector(".lista");
    const listaELEM2 = document.querySelector(".kattintasutan");
    listaELEM.addEventListener("click", esemenyKezelo);
    function esemenyKezelo(){
        listaELEM2.innerHTML = listaELEM.innerHTML;
    }
}

function esemenyKezeles2(){
    const feladatELEM = document.querySelector(".feladat");
    feladatELEM.innerHTML += "<button>OK</button>"
    const gombELEM = document.querySelector(".feladat button");
    gombELEM.addEventListener("click", esemenyKezelo);
    function esemenyKezelo(){
        feladatELEM.innerHTML += `<div><img src="kep.jpg" alt="virág" id="kep" class="kisebb"></div>`;
        esemenyKezeles3();
    }
    
    function esemenyKezeles3(){
        const KEP = document.querySelector("#kep");
        KEP.addEventListener("mouseout", esemenyKezelo);
        KEP.addEventListener("mouseenter", esemenyKezelo2);
        function esemenyKezelo(){
            KEP.classList.add("kisebb");
        }
        function esemenyKezelo2(){
            KEP.classList.remove("kisebb");
        }
    }
}

function esemenyKezeles4(){
    const  taroloELEMEK = document.querySelectorAll(".tarolo .elem");
    const eredmenyELEM = document.querySelector(".megjelenito");
    for (let index = 0; index < taroloELEMEK.length; index++) {
        taroloELEMEK[index].addEventListener("click", esemenyKezelo);
        function esemenyKezelo(){
            eredmenyELEM.innerHTML += taroloELEMEK[index].innerHTML;
        }
        
    }
}
