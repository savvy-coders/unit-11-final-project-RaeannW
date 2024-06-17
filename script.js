// Add your script below this line, but above the next comment!
// 1. display the current date and time on index.html page
function getBtnAndShow(){
    function displayDateAndTime(){
        document.getElementById('time').innerHTML = Date();
    }
    const element = document.getElementById('timeCheckBtn')
    element.addEventListener('click', displayDateAndTime);
}
// 2. create a function that clears the date and time that we just displayed on index.html page
function clearDateAndTime(){
    document.getElementById('time').innerHTML = '';
}
// 3. call/invoke function that displays date and time then calls function that clears the date and time after a set period
getBtnAndShow();
setInterval(clearDateAndTime, 5000);
// This export is to enable testing of your two testable primary functions.
// PLEASE DO NOT EDIT below this line!!!

module.exports.getBtnAndShow = getBtnAndShow;
module.exports.clearDateAndTime = clearDateAndTime;


