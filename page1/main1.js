const questions = [
    {
        text: "1+1:",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        text: "2+2:",
        options: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        text: "3+3:",
        options: ["7", "11", "9", "6"],
        correct: 3
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
        if (index === current) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

next.onclick = function() {
    current++;
    if (current >= questions.length) {
        current = 0;
    }
    showQuestion();
};

menuItems.forEach((item, index) => {
    item.onclick = function() {
        current = index;
        showQuestion();
    };
});

showQuestion();
