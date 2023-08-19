const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const submitInputButton = document.getElementById('submit')
const output = document.getElementById('output')

submitInputButton.addEventListener('click', function () {
    output.textContent = ''

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if (day <= 0 || isNaN(day)) {
        output.textContent = 'please provide a valid date'
    } else if (isNaN(month) || month <= 0 || month > 12) {
        output.textContent = 'please provide a valid month in ranage 1 -12';
    } else if (isNaN(year) || year <= 0 || year < 1000) {
        output.textContent = 'please provide year in YYYY format';

    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30 || (month === 2 && day > 28) || day > 31) {
        output.textContent = 'please provide valid date with respect to Month';
    } else {
     const currentDate = new Date();
     console.log(currentDate)
     const yearsDiff = currentDate.getFullYear()- year;
     const monthsDiff = currentDate.getMonth()-(month-1);
     const daysDiff = currentDate.getDate() - day;
     output.textContent= `your Age is ${yearsDiff} years , ${monthsDiff} months, ${daysDiff} days`
    }
})