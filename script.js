// Найти кнопку на странице
const button_left = document.querySelector('.toggle-left');
const button_right = document.querySelector('.toggle-right');


// Добавить событие по клику
button_left.onclick = function(col) {
    if (button_left.classList.contains('toggle-left')) {
        
        button_left.disabled = true;
        button_right.disabled = false;

        button_left.style.background = "gray";
        button_right.style.background = "blue";

        button_right.style.color = "white";
        button_left.style.color = "lightgray";
    } 
};

button_right.onclick = function() {
    if (button_right.classList.contains('toggle-right')){
        
        button_right.disabled = true;
        button_left.disabled = false;

        button_right.style.background = "gray";
        button_left.style.background = "blue";

        button_left.style.color = "white";
        button_right.style.color = "lightgray";
    }
};
