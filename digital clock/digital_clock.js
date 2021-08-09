function clock(){
    document.getElementById('hours').innerText=(new Date()).getHours();
    document.getElementById('minutes').innerText=(new Date()).getMinutes();
    document.getElementById('seconds').innerText=(new Date()).getSeconds();
}
setInterval(clock,1000);