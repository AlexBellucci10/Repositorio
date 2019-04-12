var letra = "#";

function joga(celula) {
    celulaclicada = document.getElementById(celula).innerHTML;
    if (celulaclicada == "#" || celulaclicada == "*") {
        alert("Opa, este quadrado já foi escolhido!");
    } else {
        document.getElementById(celula).innerHTML = letra;
        if (letra == "#") {
            letra = "*";
        } else {
            letra = "#";
        }
    }
}

function verif() {
    A1 = document.getElementById('caixinha1').innerHTML;
    A2 = document.getElementById('caixinha2').innerHTML;
    A3 = document.getElementById('caixinha3').innerHTML;
    A4 = document.getElementById('caixinha4').innerHTML;
    A5 = document.getElementById('caixinha5').innerHTML;
    A6 = document.getElementById('caixinha6').innerHTML;
    A7 = document.getElementById('caixinha7').innerHTML;
    A8 = document.getElementById('caixinha8').innerHTML;
    A9 = document.getElementById('caixinha9').innerHTML;
    if (((A1 != '') && (A2 != '') && (A3 != '') && (A1 == A2) && (A2 == A3)) || ((A1 != '') && (A5 != '') && (A9 != '') && (A1 == A5) && (A5 == A9)) || ((A1 != '') && (A4 != '') && (A7 != '') && (A1 == A4) && (A4 == A7)) || ((A4 != '') && (A5 != '') && (A6 != '') && (A4 == A5) && (A5 == A6)) || ((A7 != '') && (A8 != '') && (A9 != '') && (A7 == A8) && (A8 == A9)) || ((A2 != '') && (A5 != '') && (A8 != '') && (A2 == A5) && (A5 == A8)) || ((A3 != '') && (A6 != '') && (A9 != '') && (A3 == A6) && (A6 == A9)) || ((A7 != '') && (A5 != '') && (A3 != '') && (A7 == A5) && (A5 == A3))) {
        alert('Você ganhou! Parabéns campeão!');
        novo();
    }
}

function novo() {
    for (a = 1; a < 10; a++) {
        nomecelula = 'caixinha' + a
        document.getElementById(nomecelula).innerHTML = '';

    }
}


