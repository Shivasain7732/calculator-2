let calculation =  JSON.parse(localStorage.getItem('message'));

function displayClean() {
    calculation = ' ';
    document.querySelector('.js-display').innerHTML = `${calculation}`;
    console.log(calculation);
}
function display(){
    // console.log(calculation);
    localStorage.setItem('message',JSON.stringify(calculation));
}