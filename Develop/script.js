//Display the day at top
var today = document.getElementById('currentDay');

today.innerHTML=moment().format('LLLL');

//Background colors
var rightNow = moment().format('LT');
var hourHeader = document.getElementsByClassName('hour')
let theTime = hourHeader.getAttribute('data-value');

// if (theTime == rightNow){
//     document.getElementsByClassName('hour').style.present
// }
// else if (theTime > rightNow){
//     document.getElementsByClassName('hour').style.future
// }
// else if (theTime < rightNow){
//     document.getElementsByClassName('hour').style.past
// };

