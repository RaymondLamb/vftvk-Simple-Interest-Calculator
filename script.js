function compute()
{
    p = document.getElementById("principal").value;
    var pricipal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var convYears = number(years);
    var interest = principal * convYears * rate/100;
}

function updateSlider(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmount");
    sliderDiv.innerHTML = slideAmount;
}