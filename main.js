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

const qEl = document.getElementById("question");
const ansEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const menu = document.getElementById("menu");

function loadQuestion(i) {
    const q = questions[i];
    qEl.textContent = q.text;
    ansEl.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        ansEl.appendChild(btn);
    });

    updateMenu(i);
}

function checkAnswer(index) {
    const correct = questions[current].correct;
    const buttons = ansEl.querySelectorAll("button");
    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.style.background = "#4caf50";
        else if (i === index) b.style.background = "#f44336";
    });
}

function updateMenu(i) {
    document.querySelectorAll("aside li").forEach(li => li.classList.remove("active"));
    document.querySelector(`aside li[data-q="${i}"]`).classList.add("active");
}

nextBtn.onclick = () => {
    current = (current + 1) % questions.length;
    loadQuestion(current);
};

menu.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        current = parseInt(e.target.dataset.q);
        loadQuestion(current);
    }
});

loadQuestion(current);
