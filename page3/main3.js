const questions = [
    {
        text: "Якого газу найбільше в атмосфері Землі?",
        options: ["Кисень", "Азот", "Водень", "Вуглекислий газ"],
        correct: 1
    },
    {
        text: "Яка планета сонячної системи має найбільшу кількість супутників?",
        options: ["Марс", "Юпітер", "Сатурн", "Уран"],
        correct: 1
    },
    {
        text: "Яка частина клітини відповідає за зберігання генетичної інформації?",
        options: ["Рибосома", "Цитоплазма", "Ядро", "Мітохондрія"],
        correct: 2
    }
];

let current = 0;
let question = document.getElementById("question");
let answers = document.getElementById("answers");
let next = document.getElementById("next");
let menuItems = document.querySelectorAll("aside li"); 

function showQuestion() {
    let q = questions[current];
    question.innerText = q.text;
    answers.innerHTML = "";

    for (let i = 0; i < q.options.length; i++) {
        let btn = document.createElement("button");
        btn.innerText = q.options[i];
        btn.onclick = function() {
            if (i === q.correct) {
                btn.style.background = "lightgreen";
            } else {
                btn.style.background = "lightcoral";
            }
            let all = answers.querySelectorAll("button");
            for (let b of all) b.disabled = true;
        };
        answers.appendChild(btn);
    }
    updateMenu();
}

function updateMenu() {
    menuItems.forEach((item, index) => {
        item.classList.toggle("active", index === current);
    });
}

next.onclick = function() {
    current++;
    if (current >= questions.length) current = 0;
    showQuestion();
};

menuItems.forEach((item, index) => {
    item.onclick = function() {
        current = index;
        showQuestion();
    };
});

showQuestion();
