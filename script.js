let inputDay = document.querySelector('#day')
let inputMonth = document.querySelector('#month')
let inputYear = document.getElementById("year")
let year_output = document.querySelector(".year-output")
let month_output = document.querySelector(".month-output")
let day_output = document.querySelector(".days")
const btn = document.querySelector('button')


const validation = () => {
    let d = new Date(inputYear.value, inputMonth.value, 0);
    let DayValid = inputDay.value <= d.getDate();
    let MonthValid = inputMonth.value > 0 && inputMonth.value <= 12;
    let yearValid = inputYear.value <= d.getFullYear();
    return DayValid && MonthValid
}
btn.addEventListener('click', ()=>{
    
    let birthDate = new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}`)
    if(validation()){
        let result = new Date() - birthDate
        let year = Math.floor(result / (365.25 * 24 * 60 * 60 * 1000))
        let month = Math.floor((result % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        let days = Math.floor((result % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        year_output.innerHTML = year;
        month_output.innerHTML = month;
        day_output.innerHTML = days;

    }
    else{
        year_output.innerHTML = 'error'
    }
})
