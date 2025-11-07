let buttons = document.querySelectorAll(".quiz-btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        let link = buttons[i].getAttribute("data-link");
        window.location.href = link;
    };
}

