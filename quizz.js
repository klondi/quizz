var i = null;
var q = null;
var a = null;
var qi = null;
var ai = null;
var qz = null;
var ge = null;
var tno = null;

var player = null;
var players = [{n:"Jugador 1",s:0},{n:"Jugador 2",s:0},{n:"Jugador 3",s:0},{n:"Jugador 4",s:0}];

var wbind = null;
var abind = null;
var sbind = null;
var dbind = null;
var obind = null;
var rbind = null;
var nbind = null;

function unbind() {
    wbind = null;
    abind = null;
    sbind = null;
    dbind = null;
    obind = null;
    rbind = null;
    nbind = null;
}

function setscores() {
    var p1s = document.getElementById("p1points");
    var p2s = document.getElementById("p2points");
    var p3s = document.getElementById("p3points");
    var p4s = document.getElementById("p4points");
    p1points.innerHTML = players[0].s;
    p2points.innerHTML = players[1].s;
    p3points.innerHTML = players[2].s;
    p4points.innerHTML = players[3].s;
}

function right() {
    unbind();
    tno.innerHTML= "El jugador "+players[player].n+" acertó";
    players[player].s += 3;
    setscores();
    q.classList.remove("singlequestion");
    a.classList.remove("hidden");
    qz.classList.add("rightanswer");
    nbind = next;
}

function wrong() {
    unbind();
    tno.innerHTML= "Nadie acertó";
    players[player].s -= 2;
    setscores();
    q.classList.remove("singlequestion");
    a.classList.remove("hidden");
    qz.classList.add("wronganswer");
    nbind = next;
}

function p1() {
    playerbutton(0);
}

function p2() {
    playerbutton(1);
}

function p3() {
    playerbutton(2);
}

function p4() {
    playerbutton(3);
}

function playerbutton(i) {
    unbind();
    player = i;
    tno.innerHTML= "El jugador "+players[player].n+" pulsó el botón";
    obind = right;
    fbind = wrong;
    rbind = rebound;
}

function rebound() {
    unbind();
    tno.innerHTML= "Rebote";
    players[player].s -= 2;
    setscores();
    wbind = p1;
    abind = p2;
    sbind = p3;
    dbind = p4;
}

function next() {
    unbind();
    a.classList.add("hidden");
    q.classList.add("singlequestion");
    qz.classList.remove("rightanswer");
    qz.classList.remove("wronganswer");

    next.q = ++next.q || 0;

    if (next.q >= questions.length) {
        end();
        return;
    }

    tno.innerHTML= "Nueva pregunta";
    tq = questions[next.q];
    qi.innerHTML = tq.q;
    ai.innerHTML = tq.a;
    wbind = p1;
    abind = p2;
    sbind = p3;
    dbind = p4;
}

function go() {
    i = document.getElementById("intro");
    q = document.getElementById("question");
    a = document.getElementById("answer");
    qi = document.getElementById("qinner");
    ai = document.getElementById("ainner");
    qz = document.getElementById("quizz");
    ge = document.getElementById("gameover");
    tno = document.getElementById("turno");
    i.classList.remove("hidden");
    nbind = first;
    document.onkeydown = function(e) {
        e = e || window.event;
        switch(e.which || e.keyCode) {
            case 87:
                wbind && wbind();
                break;
            case 65:
                abind && abind();
                break;
            case 83:
                sbind && sbind();
                break;
            case 68:
                dbind && dbind();
                break;        
            case 79:
                obind && obind();
                break;        
            case 70:
                fbind && fbind();
                break;        
            case 82:
                rbind && rbind();
                break;        
            case 78:
                nbind && nbind();
                break;        
            default: return;
        }
        e.preventDefault();
    };
}

function first() {
    i.classList.add("hidden");
    q.classList.remove("hidden");
    a.classList.remove("hidden");
    next();
}

function end() {
    tno.innerHTML= "";
    q.classList.add("hidden");
    a.classList.add("hidden");
    ge.classList.remove("hidden");
}
