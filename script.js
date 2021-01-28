let large_log = document.getElementById('logo');
let small_log = document.getElementById('logo__inner')


function changeBgColor(color) {
    large_log.style.backgroundColor = color;

}


function randomColor() {
    r = Math.floor(Math.random() * 148) + 28;
    g = Math.floor(Math.random() * 148) + 28;
    b = Math.floor(Math.random() * 148) + 28;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

var interval = setInterval(function () { changeBgColor(randomColor()); }, 5000);


small_log.addEventListener('mouseover', function () {

    changeBgColor(randomColor());
    large_log.classList.remove('trans');
    
    clearInterval(interval);
    interval = null;
})

small_log.addEventListener('mouseout', function () {
    large_log.classList.add('trans');
    if (interval == null) {
        interval = setInterval(function () { changeBgColor(randomColor()); }, 5000);
    };
})



