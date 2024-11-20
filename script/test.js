function getTimeString(time){
    const hour = parseInt(time/3600);
let remaingSecond= time % 3600;
const minute= parseInt(remaingSecond/60);
remaingSecond=remaingSecond%60;
return`${hour}hour${minute}minute ${remaingSecond}ago`;
}
console.log(getTimeString(60));