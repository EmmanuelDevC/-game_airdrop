let count = 0;
let discount = 10000;
const decrease = document.getElementById("decrease");
const counter = document.getElementById('click');
const buttons = document.querySelectorAll('#button');
const checks = document.querySelectorAll('#check');
const checkeds = document.querySelectorAll('#checked');

function change() {
    count += 1;
    discount -= 1;
    counter.innerText = count;
    decrease.innerText = discount;

    if (discount <= 0) {
        discount = 0;
        decrease.innerText = 0;
    }

    
    


    // count += 10; // Counting up by 10
    //     discount += 10;
    //     counter.innerText = count;
    //     decrease.innerText = discount;
}

buttons.forEach(button => button.addEventListener('click', change));

checks.forEach((check, index) => {
    check.addEventListener('click', function () {
        checkeds[index].innerHTML = "Checking";
        setTimeout(() => {
            checkeds[index].innerHTML = "Task completed";
            check.style.background = "rgba(128, 0, 128, 0.334)";
        }, 20000);
    });
});
