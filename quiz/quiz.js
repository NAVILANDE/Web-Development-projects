const quiz = [
    {
        question: "Q1:what is the full frm of HTML ? ",
        a: "hello to my lord",
        b: "hey text markup language",
        c: "hypertext makeup language",
        d: "hypertext  markup language",
        ans: "ans4"

    },

    {
        question: "Q2:what is the full frm of CSS ? ",
        a: "cascading style sheet",
        b: "hcascadih style sheep",
        c: "cartoon style sheets ",
        d: "cascading super sheet ",
        ans: "ans1"

    },
    {
        question: "Q3:what is the full frm of HTTP ? ",
        a: "hypertext tranfer product ",
        b: "hypertext test protocol",
        c: "hey tranfer protocol",
        d: "hypertext  tranfer protocol",
        ans: "ans4"

    }, {
        question: "Q4:what is the full frm of JS ? ",
        a: "javascript",
        b: "javasuper",
        c: "justscript",
        d: "jordenshoes",
        ans: "ans1"

    }


];
const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const score = document.querySelector('#scorearea')
let qustcount = 0;
let sscore = 0;
const loadqust = () => {

    const qustlist = quiz[qustcount];
    question.innerText = qustlist.question;
    opt1.innerText = qustlist.a;
    opt2.innerText = qustlist.b;
    opt3.innerText = qustlist.c;
    opt4.innerText = qustlist.d;

}

loadqust();

const getcheckans = () => {
    let answer;
    answers.forEach((currentele) => {
        if (currentele.checked) {
            answer = currentele.id;
        }

    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((currentele) =>
        currentele.checked = false
    )



}
submit.addEventListener('click', () => {
    const checkans = getcheckans();
    console.log(checkans);
    if (checkans === quiz[qustcount].ans) {
        sscore++;

    }
    qustcount++;
    deselectAll();

    if (qustcount < quiz.length) {
        loadqust();
    }
    else {
        score.innerHTML =
            ` <h3> your scored ${score} /${quiz}</h3>
                <button class="btn" onclick="loaction.reload()"></button>`;
        score.classList.remove('scorearea');
    }

});