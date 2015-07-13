var i = null;
var q = null;
var a = null;
var qi = null;
var ai = null;
var qz = null;
var ge = null;
var tno = null;

var player = null;

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

function right() {
    unbind();
    tno.innerHTML= "El jugador "+player+" acertó";
    q.classList.remove("singlequestion");
    a.classList.remove("hidden");
    qz.classList.add("rightanswer");
    nbind = next;
}

function wrong() {
    unbind();
    tno.innerHTML= "Nadie acertó";
    q.classList.remove("singlequestion");
    a.classList.remove("hidden");
    qz.classList.add("wronganswer");
    nbind = next;
}

function p1() {
    playerbutton(1);
}

function p2() {
    playerbutton(2);
}

function p3() {
    playerbutton(3);
}

function p4() {
    playerbutton(4);
}

function playerbutton(i) {
    unbind();
    player = i;
    tno.innerHTML= "El jugador "+i+" pulsó el botón";
    obind = right;
    fbind = wrong;
    rbind = rebound;
}

function rebound() {
    unbind();
    tno.innerHTML= "Rebote";
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
