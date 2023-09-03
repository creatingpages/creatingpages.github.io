let robot = document.getElementById("robot");
let debounce = false;

robot.addEventListener('click', () => {
    if (debounce === true) return;
    debounce = true;

    robot.classList.add("spin");

    setTimeout(() => {
        robot.classList.remove("spin");
        debounce = false;   
    }, 1000);
});