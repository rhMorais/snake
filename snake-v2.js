window.onload = function () {
    var body = document.body, //HTML
        tec = 39, tecAnterior = 39, pause = false,       //TECLAS
        limite = 25, inicio = 1, i, j, velocidade, interval, pontuacao = 0,//CAMPO
        posCorpo, posRabo, cabeca, corpo, rabo, cobra = [], vida = true, //COBRA
        comida, colEat, linEat; //COMIDA

    body.onkeydown = function (e) {
        if (e.keyCode == 32) {
            if (pause == false) pause = true;
            else pause = false;
        }
        if ((e.keyCode == 37 || e.keyCode == 38 ||
            e.keyCode == 39 || e.keyCode == 40) && !pause){
            tec = e.keyCode;
        }
    };
//coments
//sem penis
    function direcao(tec) {
        switch (tecAnterior) {
            case 39:
                if ((tec != 37)) {
                    tecAnterior = tec;
                }
                switch (tec) {
                    case 40:            //BAIXO
                        cabeca = document.querySelector("table tbody tr:nth-child(" + down() + ") td:nth-child(" + j + ")");
                        return cabeca;
                    case 38:          //CIMA
                        cabeca = document.querySelector("table tbody tr:nth-child(" + up() + ") td:nth-child(" + j + ")");
                        return cabeca;
                    default:            // PADRAO DIREITA 
                        cabeca = document.querySelector("table tbody tr:nth-child(" + i + ") td:nth-child(" + right() + ")");
                        return cabeca;
                }
            case 40:
                if ((tec != 38)) {
                    tecAnterior = tec;
                }
                switch (tec) {
                    case 39:            //DIREITA
                        cabeca = document.querySelector("table tbody tr:nth-child(" + i + ") td:nth-child(" + right() + ")");
                        return cabeca;
                    case 37:          //ESQUERDA
                        cabeca = document.querySelector("table tbody tr:nth-child(" + i + ") td:nth-child(" + left() + ")");
                        return cabeca;
                    default:            // PADRAO BAIXO 
                        cabeca = document.querySelector("table tbody tr:nth-child(" + down() + ") td:nth-child(" + j + ")");
                        return cabeca;
                }
            case 37:
                if ((tec != 39)) {
                    tecAnterior = tec;
                }
                switch (tec) {
                    case 40:            //BAIXO
                        cabeca = document.querySelector("table tbody tr:nth-child(" + down() + ") td:nth-child(" + j + ")");
                        return cabeca;
                    case 38:          //CIMA
                        cabeca = document.querySelector("table tbody tr:nth-child(" + up() + ") td:nth-child(" + j + ")");
                        return cabeca;
                    default:            // PADRAO ESQUERDA 
                        cabeca = document.querySelector("table tbody tr:nth-child(" + i + ") td:nth-child(" + left() + ")");
                        return cabeca;
                }
            case 38:
                if ((tec != 40)) {
                    tecAnterior = tec;
                }
                switch (tec) {
                    case 39:            //DIREITA
                        cabeca = document.querySelector("table tbody tr:nth-child(" + i + ") td:nth-child(" + right() + ")");
                        return cabeca;
                    case 37:          //ESQUERDA
                        cabeca = document.querySelector("table tbody tr:nth-child(" + i + ") td:nth-child(" + left() + ")");
                        return cabeca;
                    default:            // PADRAO CIMA
                        cabeca = document.querySelector("table tbody tr:nth-child(" + up() + ") td:nth-child(" + j + ")");
                        return cabeca;
                }
        }
    }
    function right() {
        if (j == limite) {
            j = inicio;
            return j;
        }
        return ++j;
    }
    function down() {
        if (i == limite) {
            i = inicio;
            return i;
        }
        return ++i;
    }
    function up() {
        if (i == inicio) {
            i = limite;
            return i;
        }
        return --i;
    }
    function left() {
        if (j == inicio) {
            j = limite;
            return j;
        }
        return --j;
    }

    function IniciaBody() {
        posCorpo = j;
        return --posCorpo;
    }

    function iniciaCobra() {
        i = 1, j = 3;
        cabeca = document.querySelector("table tbody tr:nth-child(" + 1 + ") td:nth-child(" + 3 + ")");
        cobra.push(cabeca); //0
        corpo = document.querySelector("table tbody tr:nth-child(" + 1 + ") td:nth-child(" + 2 + ")");
        cobra.push(corpo); //1
        corpo = document.querySelector("table tbody tr:nth-child(" + 1 + ") td:nth-child(" + 1 + ")");
        cobra.push(corpo); //2
        for (var b = 0; b < cobra.length; b++) {
            if (b == 0) {
                cobra[b].className = "vermelho";
                cobra[b].condicao = true;
            }
            // else if (b == (cobra.length - 1)) {
            //     cobra[b].condicao = false;
            //     cobra[b].className = "branco";
            // }
            else {
                cobra[b].className = "cinza";
                cobra[b].condicao = true;
            }
        }
        tec = 39;
        tecAnterior = 39;
        velocidade = 500;
    }
    function geraComida() {
        do {
            colEat = Math.floor(Math.random() * (limite - inicio + 1) + inicio);
            linEat = Math.floor(Math.random() * (limite - inicio + 1) + inicio);
            comida = document.querySelector("table tbody tr:nth-child(" + colEat + ") td:nth-child(" + linEat + ")");
            if (!comida.condicao) {
                comida.className = "verde";
            }
        }
        while (comida.condicao)
    }
    cobra.bunda = false;
    var cont = 0;
    function procedimentos() {
        cont++;
        if (!vida) {
            clearInterval(interval);
            alert("Se fudeu!");
            return;          
        }
        if(cont == 1){
            rabo = document.querySelector("table tbody tr:nth-child(" + 1 + ") td:nth-child(" + 1 + ")");
            cobra.push(rabo);
        }
        if (!pause) {
            for (var b = (cobra.length - 1); b >= 0; b--) {
                if (b == 0) {
                    cobra[b] = direcao(tec);
                    if (!cobra[b].condicao || cobra[b].bunda) {
                        cobra[b].className = "vermelho";
                        cobra[b].condicao = true;
                        cobra[b].bunda = false;
                    }
                    else {
                        vida = false;
                        cobra[b].className = "vermelho";
                    }
                }
                else if ((b == (cobra.length - 1)) && cont >= 1) {
                    cobra[b].condicao = false;
                    cobra[b] = cobra[b - 1];
                    cobra[b].className = "branco";
                }
                else if (b == (cobra.length - 2)) {
                    cobra[b].bunda = true;
                    cobra[b] = cobra[b - 1];
                    cobra[b].className = "cinza";
                    cobra[b].condicao = true;
                }
                else {
                    cobra[b] = cobra[b - 1];
                    cobra[b].className = "cinza";
                    cobra[b].condicao = true;
                }
            }

            if (cobra[0] == comida) {
                cobra.push(corpo);
                geraComida();
                pontuacao += 10;
                document.querySelector("p").innerHTML = pontuacao;
                clearInterval(interval);
                if (velocidade >= 100) {
                    velocidade -= 25;
                }
                interval = setInterval(procedimentos, velocidade);
            }
        }
    }

    document.body.innerHTML += "<section id = 'tabuleiro'><table><tbody>" + new Array(limite + 1).join("<tr>" + new Array(limite + 1).join("<td></td>") + "</tr>") + "</tbody></table></section>";
    document.body.innerHTML += "<aside id = 'score'><fieldset><legend>SCORE</legend><p></p></fieldset><button id='restart'>Restart</button></aside>";

    iniciaCobra();
    geraComida();
    interval = setInterval(procedimentos, velocidade);

    document.querySelector("#restart").onclick = function () {
        window.location.reload()
    };

};