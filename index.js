function clock(){
    var time = new Date();
    var hour = time.getHours().toString().padStart(2,0)
    var minute = time.getMinutes().toString().padStart(2,0)
    var second = time.getSeconds().toString().padStart(2,0)
    var ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour%12


    document.getElementById("clock-box2").textContent = hour + "\nhours"
    document.getElementById("clock-box3").textContent = minute + "\nmins"
    document.getElementById("clock-box4").textContent = second + "\nsecs"
    document.getElementById("clock-box5").textContent = ampm

    
let greeting_msg = document.getElementById("gm-text")

if(hour < 12 && hour >= 00){
    greeting_msg.textContent = "GOOD MORNING!! WAKE UP !!"
}
if( hour >= 12 && hour < 16){
    greeting_msg.textContent ="GOOD AFTERNOON!!"
  }
if(hour >=16 && hour< 20){
    greeting_msg.textContent ="GOOD EVENING!!"
}
if(hour >= 20 && hour < 24 ){
    greeting_msg.textContent ="GOOD NIGHT!!"  
}



}

setInterval(clock, 1000)


function alarmTimings(){
    var time = new Date();
    var hour = parseInt(time.getHours().toString().padStart(2,0))
    var ampm = hour >= 12 ? 'PM' : 'AM';

    document.getElementById("clock-box2").textContent = hour 

    let wakeUpTime = document.getElementById("dd1").value
    let lunchTime = document.getElementById("dd2").value;
    let napTime = document.getElementById("dd3").value;
    let nightTime = document.getElementById("dd4").value;

    let newtime = parseInt(wakeUpTime) +1;
    let int_lunctime = parseInt(lunchTime) +1;
    let int_naptime = parseInt(napTime) +1;
    let int_nighttime = parseInt(nightTime) +1;

    if (hour == wakeUpTime) {
        document.getElementById("qoute").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("pic").style.backgroundImage = "url('Component\ 30\ –\ 1.png')";
    } else if (hour == lunchTime) {
        document.getElementById("qoute").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("pic").style.backgroundImage = "url('Component\ 31 –\ 1.png')";
    } else if (hour == napTime) {
        document.getElementById("qoute").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("pic").style.backgroundImage = "url('lunch_image.png')";
    } else if (hour == nightTime) {
        document.getElementById("qoute").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("pic").style.backgroundImage = "url('Component\ 32 –\ 1.png')";
    }

    document.getElementById("timing1").textContent = "Wake up Time: "  +  wakeUpTime + " " + ampm + " - "  + newtime + " " + ampm;
    document.getElementById("timing2").textContent = "Lunch Time: "  +  lunchTime + " " + ampm + " - "  + int_lunctime + " " + ampm;
    document.getElementById("timing3").textContent = "Nap Time: "  +  napTime + " " + ampm + " - "  + int_naptime + " " + ampm;
    document.getElementById("timing4").textContent = "Night Time: "  +  nightTime + " " + ampm + " - "  + int_nighttime + " " + ampm;


}





