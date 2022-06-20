const selectMenu=document.querySelectorAll('select'),
currentTime=document.querySelector('h1'),
setAlarmBtn=document.querySelector('button'),
currentState=document.querySelector('.content')


let alarmTime, isAlarmSet = false;
ringtone=new Audio('./files/kenny.mp3')


for ( let i=12;i>0;i--){
 i=i<10?`${0}${i}`: i ;
 let option = `<option value='${i}'>${i}</option>`;
 selectMenu[0].firstElementChild.insertAdjacentHTML('afterend',option);
}


for ( let i=59;i>=0;i--){
 i=i<10?`${0}${i}`: i ;
 let option = `<option value='${i}'>${i}</option>`;
 selectMenu[1].firstElementChild.insertAdjacentHTML('afterend',option);
}


for ( let i=2; i>0 ;i--){
 let time_type = i == 1 ? 'AM': 'PM' ;
 let option = `<option value='${time_type}'>${time_type}</option>`;
 selectMenu[2].firstElementChild.insertAdjacentHTML('afterend',option);
}



setInterval(()=>{
 let date=new Date()


 h=date.getHours()
 m=date.getMinutes()
 s=date.getSeconds()
 time_type = "AM";


 if (h>=12){
  h=h-12
  time_type='PM'
 }

 // if the time_type is greater than or equal 12
h = h == 0 ? h=12 : h;

// to add 0 to timeconstants that do not have,,,  timeconstants='hours,minutes,seconds'
h = h<10 ? '0'+ h : h;
m = m<10 ? '0'+ m : m;
s = s<10 ? '0'+ s : s;


currentTime.innerText = `${h}:${m}:${s} ${time_type}`;

if ( alarmTime == `${h}:${m}:${time_type}`){
 
  ringtone.play();
  ringtone.loop = true;
  console.log('Alarm is ringing.....')

}


},1000)


const setAlarm=()=>{
  
 if (isAlarmSet){

     alarmTime='';
     ringtone.pause();
     currentState.classList.remove('disable')
     setAlarmBtn.innerText = "Set Alarm";
     return isAlarmSet=false;


 }






  let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;
  console.log(time)

  if (time.includes('Hour') || time.includes('Minutes') || time.includes('AM/PM')){
   alert('please enter a valid time');
  }
  isAlarmSet=true;
  alarmTime = time;
   currentState.classList.add('disable')
  setAlarmBtn.innerText='Clear Alarm'

}

setAlarmBtn.addEventListener('click',setAlarm)