var ubind = null;
var dbind = null;

function right() {
var q = document.getElementById("question");
var a = document.getElementById("answer");
var qz = document.getElementById("quizz");
q.classList.remove("singlequestion");
a.classList.remove("hidden");
qz.classList.add("rightanswer");
ubind = dbind = next;
}

function wrong() {
var q = document.getElementById("question");
var a = document.getElementById("answer");
var qz = document.getElementById("quizz");
q.classList.remove("singlequestion");
a.classList.remove("hidden");
qz.classList.add("wronganswer");
ubind = dbind = next;
}

a = 0;
function next() {
var q = document.getElementById("question");
var a = document.getElementById("answer");
var qi = document.getElementById("qinner");
var ai = document.getElementById("ainner");
var qz = document.getElementById("quizz");
a.classList.add("hidden");
q.classList.add("singlequestion");
qz.classList.remove("rightanswer");
qz.classList.remove("wronganswer");

next.q = ++next.q || 0;

if (next.q >= questions.length) {
  end();
  return;
}

tq = questions[next.q];
qi.innerHTML = tq.q;
ai.innerHTML = tq.a;
ubind = right;
dbind = wrong;
}

function go() {
  var i = document.getElementById("intro");
  i.classList.remove("hidden");
  ubind = dbind = first;
  document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
      case 33:
        ubind && ubind();
        break;
      case 34:
        dbind && dbind();
        break;
      default: return;
    }
    e.preventDefault();
  };
}

function first() {
  var i = document.getElementById("intro");
  var q = document.getElementById("question");
  var a = document.getElementById("answer");
  i.classList.add("hidden");
  q.classList.remove("hidden");
  a.classList.remove("hidden");
  next();
}

function end() {
  var q = document.getElementById("question");
  var a = document.getElementById("answer");
  var go = document.getElementById("gameover");
  q.classList.add("hidden");
  a.classList.add("hidden");
  go.classList.remove("hidden");
}
