const button = document.getElementById("changeColorBtn");

button.addEventListener("click", clickFunction);

function clickFunction(){
    
    const bgColor = rgbColorCode();
    document.body.style.backgroundColor = bgColor;
}

function rgbColorCode(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r},${g},${b})`

    return color;
}