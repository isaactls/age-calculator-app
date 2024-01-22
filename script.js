let inputDay = document.querySelector('#day')
let inputMonth = document.querySelector('#month')
let inputYear = document.getElementById("year")
let year_output = document.querySelector(".year-output")
let month_output = document.querySelector(".month-output")
let day_output = document.querySelector(".days")
const btn = document.querySelector('button')
let label = document.querySelectorAll('label')
let input = document.querySelectorAll('input')
let yearError = document.querySelector('.year_error')
let monthError = document.querySelector('.month_error')
let dayError = document.querySelector('.day_error')

let validator = null;

const invalid = () => {
    input.forEach(el  => el.style.borderColor = "red");
    label.forEach(el => el.style.color = "red");
    if(inputDay.value == ""){
        dayError.innerHTML = "this field is required";
        dayError.style.opacity = 1;
    }
    if(inputDay.value > 31){
        dayError.innerHTML = "must be a valid day";
        dayError.style.opacity = 1;
    }
    if(inputDay.value > new Date(inputYear.value, inputMonth.value, 0).getDate() && inputMonth.value != "" && inputDay.value <= 31){
        dayError.innerHTML = "must be a valid date";
        dayError.style.opacity = 1;
    }
    if(inputMonth.value == ""){
        monthError.innerHTML = "this field is required";
        monthError.style.opacity = 1;
    }
    if(inputMonth.value > 12){
        monthError.innerHTML = "must be a valid month";
        monthError.style.opacity = 1;
    }
    if(inputYear.value == ""){
        yearError.innerHTML = "this field is required";
        yearError.style.opacity = 1;
    }
    if(inputYear.value <= 99 && inputYear > 0){
        yearError.innerHTML = "must valid year"
        yearError.style.opacity = 1;
    }
    if(inputYear.value > new Date().getFullYear()){
        yearError.innerHTML = "must be in the past";
        yearError.style.opacity = 1;
    }
}
const reset = () =>{
    input.forEach(el  => el.style.borderColor = "");
    label.forEach(el => el.style.color = "");
    dayError.innerHTML = "";
    dayError.style.opacity = 0;

    monthError.innerHTML = "";
    monthError.style.opacity = 0;

    yearError.innerHTML = "";
    yearError.style.opacity = 0;

    


}

const validation = () => {
    let d = new Date(inputYear.value, inputMonth.value, 0);
    let DayValid = inputDay.value <= d.getDate();
    let MonthValid = inputMonth.value > 0 && inputMonth.value <= 12;
    let yearValid = inputYear.value <= new Date().getFullYear() && inputYear.value > 99;
    let dayRange = inputDay.value > 0 && inputDay.value <= 31;
     if(DayValid && MonthValid && yearValid && dayRange){
        validator = true;
     }
     else {
        validator = false;
     }
}
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    reset();
     validation();
    let birthDate = new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}`)
    if(validator){
        let result = new Date() - birthDate
        let year = Math.floor(result / (365.25 * 24 * 60 * 60 * 1000))
        let month = Math.floor((result % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        let days = Math.floor((result % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        year_output.innerHTML = year;
        month_output.innerHTML = month;
        day_output.innerHTML = days;

    }
    else{
        {
            invalid();
        }
    }
})
