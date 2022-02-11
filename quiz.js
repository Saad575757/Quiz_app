const quizData = [
    {
        question: "1) Who is the current best footballer in the world",
        a: "Cristiano Ronaldo",
        b: "Leo Messi",
        c: "Kylian Mbappe ",
        d: "Erin Haaland",
        correct: "a",
    },
    {
        question: "2) Who is the Prime Ministe of Pakistan",
        a: "Imran Khan",
        b: "Nawaz Shareef ",
        c: "Bilawal Bhutto",
        d: "Altaf hussain",
        correct: "a",
    },
    {
        question: "3) PMA stands for?",
        a: "Pakistan Most Accessories",
        b: "Pakistan Mining academy",
        c: "Pakistan Miltary Academy",
        d: "Philips Master Academy",
        correct: "c",
    },
    {
        question: "4) Who is the founder of Pakistan?",
        a: "Allama Iqbal",
        b: "Quaid-e-Azam",
        c: "Sir Syed Ahmed Khan",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5) Who is the richest person in the world?",
        a: "Jeff bezos",
        b: "Elon Musk",
        c: "Bill gates",
        d: "Mark zuckerburg",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});