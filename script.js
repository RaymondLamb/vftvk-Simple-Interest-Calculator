function compute()
{
    p = document.getElementById("principal").value;
    var pricipal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var convYears = number(years);
    var interest = principal * convYears * rate/100;
}

//Slider
    function updateSlider(slideAmount) {
        var sliderDiv = document.getElementById("principal");
        sliderDiv.innerHTML = slideAmount;
    }