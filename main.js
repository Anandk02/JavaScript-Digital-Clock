var toggle = document.getElementById('toggle')
var hourEl = document.getElementById('hour')
var minEl = document.getElementById('min')
var secondEl = document.getElementById('second')

// Time in text
const timeEl = document.getElementById('Time')
const dateEl = document.getElementById('Date')



// Day
const day  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// Months
const month = ["Jan", "Feb","Mar", "Api", "May", "jun", "July", "Aug", "Sep", "Oct","Nov", "Dec"];

// Dark Mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode';
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode';
    }
})


// set Time
function setTime() {
   const time = new Date();
   const months =  time.getMonth();
   const days = time.getDay();
   const date = time.getDate()
   const hours = time.getHours();
   const hourForClock =  hours % 12;
   const minutes = time.getMinutes();
   const second = time.getSeconds(); 
   const AmPm = hours >= 12 ? 'PM' : 'AM'

   hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 12, 0, 360)}deg)`
   minEl.style.transform= `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
   secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

//    time
timeEl.innerHTML = `${hourForClock}:${minutes < 10 ?`0${minutes}`: minutes}:${second} ${AmPm}`
dateEl.innerHTML = `${day[days]}, ${month[months]} <span class="Circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return(num - in_min) * (out_max - out_min) /(in_max - in_min) + out_min;
}
setTime();
setInterval(setTime, 1000)
