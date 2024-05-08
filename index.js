const switchElement = document.querySelector(".switch.navbar-nav.ml-md-auto")
const body = document.querySelector('body')
var isCorrect1 = false;
var isCorrect2 = false;
var score = 0;

function checkAnswer(answer) {
    const result = document.getElementById('result');
    const totalscore = document.getElementById('score');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        if (!isCorrect1) {
            score++;
            isCorrect1 = true;
        }
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        if (isCorrect1) {
            score--;
            isCorrect1 = false;
        }
    }
    totalscore.textContent = "คะแนนรวม" + score + " คะแนน";
}

function checkAnswertwo(answer) {
    const resulttwo = document.getElementById('resulttwo');
    const totalscore = document.getElementById('score');
    if (answer === 'b') {
        resulttwo.textContent = "ถูกต้อง Gosoft";
        resulttwo.style.color = 'green';
        if (!isCorrect2) {
            score++;
            isCorrect2 = true;
        }
    } else {
        resulttwo.textContent = "Incorrect! Try again.";
        resulttwo.style.color = 'red';
        if (isCorrect2) {
            score--;
            isCorrect2 = false;
        }
    }
    totalscore.textContent = "คะแนนรวม" + score + " คะแนน";
}








switchElement.addEventListener('change', (event) => {

    if (event.target.checked) {
        // ถ้า checkbox ถูกเลือก
        console.log('Checkbox is checked');
        body.classList.add("dark")

    } else {
        // ถ้า checkbox ไม่ถูกเลือก
        console.log('Checkbox is unchecked');
        body.classList.remove("dark")

    }
});