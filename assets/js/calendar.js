const months = document.querySelectorAll("[data-type='month']");
const buttons = document.querySelectorAll("[data-type='monthButton']")


months.forEach(month => {month.style.display = 'none';});
months[0].style.display = 'block';

const showMonth = (name) => {

    months.forEach( month => {if (month.dataset.month == name) {month.style.display = 'block'} else {month.style.display='none'}})
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        showMonth(button.dataset.value)
    })
})