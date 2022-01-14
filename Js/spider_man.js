var andrew_garfield = "./question1_andrew_garfield.html";
var tom_holland = "./question1_tom_holland.html";
var tobey_maguire = "./question1_tobey_maguire.html";
var home = "./spider_man_home.html";
var videoTrailler = src="./video/Trailler.mp4";

function reload() {
    window.location.href=home;
}
//mudar pagina com o click//
function andrewGarfield() {
    window.location.href=andrew_garfield;
}
function tomHolland() {
    window.location.href=tom_holland;
}
function tobeyMaguire(){
    window.location.href=tobey_maguire;
}
function Andrew1(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Subestação Elétrica. \n 2-Estação de Metrô');
        if(question == 1){
            window.location.href = href="question2_andrew_garfield.html";
        break;
        } else if (question ==2){
            window.location.href = href="gameOver.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
} 
 
function Andrew2(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Homem Areia. \n 2-Dr.Octopus');
        if(question == 1){
            window.location.href = href="gameOver.html";
        break;
        } else if (question ==2){
            window.location.href = href="question3_andrew_garfield.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
}
function Andrew3(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Homem Areia-Banco de Areia. \n 2-Lagarto-Caçamba de um caminhão');
        if(question == 1){
            window.location.href = href="gameOver.html";
        break;
        } else if (question ==2){
            window.location.href = src="../html/venceu.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
}
function Tobey4(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Atacamos. \n 2-Curamos');
        if(question == 1){
            window.location.href = href="gameOver.html";
        break;
        } else if (question ==2){
            window.location.href = href= "question2_tobey_maguire.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
}
function Tobey5(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Happy. \n 2-Tia May');
            if(question == 1){
                window.location.href = href="gameOver.html";
            break;
        } else if (question ==2){
            window.location.href = href="question3_tobey_maguire.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
}
function Tobey6(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Com Responsabilidades, vêm grandes Poderes. \n 2-Com grandes poderes, vêm grandes responsabilidades');
            if(question == 1){
                window.location.href = href="gameOver.html";
            break;
        } else if (question ==2){
            window.location.href = href="../html/venceu.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
}
function Tom7(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Ele é preso. \n 2-Procura Dr.Estranho');
        if(question == 1){
            window.location.href = href="question2_tom_holland.html";
        break;
        } else if (question ==2){
            window.location.href = href="gameOver.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
}
function Tom8(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Doutor Octopus. \n 2-Duende Verde');
        if(question == 1){
            window.location.href = href="question3_tom_holland.html";
        break;
        } else if (question ==2){
            window.location.href = href="gameOver.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
}
function Tom9(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1-Venom. \n 2-Venom');
        if(question == 1){
            window.location.href = href="../html/venceu.html";
        break;
        } else if (question ==2){
            window.location.href = href="../html/venceu.html";
        break;
        }else {
            alert("Digite 1 ou 2");
        }
    }
} 
function trailerVideo(){
    document.getElementById("trailer").innerHTML = "Olá, eu sou o Homem Aranha, me chamo Peter, Peter Parker!"; 
    document.getElementById("trailer2").innerHTML = "Alias somos Peter Parker. Não entendeu? Assiste um trechinho aí!";
    document.getElementById("trailer3").innerHTML = "";
} 