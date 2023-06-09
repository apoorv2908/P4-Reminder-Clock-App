function clock(){
    var time = new Date();
    var hour = time.getHours().toString().padStart(2,0)
    var test = time.getHours().toString().padStart(2,0)
    var minute = time.getMinutes().toString().padStart(2,0)
    var second = time.getSeconds().toString().padStart(2,0)
    var ampm = "AM"

    if(hour == 00){
        hour == 12
    }
    if(hour>12){
        hour = hour - 12;
        ampm = "PM"
    }


    document.getElementById("clock-box2").textContent = hour + "\nhours"
    document.getElementById("clock-box3").textContent = minute + "\nmins"
    document.getElementById("clock-box4").textContent = second + "\nsecs"
    document.getElementById("clock-box5").textContent = ampm

    let greeting_msg = document.getElementById("qoute")

    if(test >= 04 && test < 12){
        greeting_msg.textContent = "GET SOME HEALTHY BREAKFAST !!"
    }else if( test >= 12 && test< 16){
        greeting_msg.textContent ="LET'S HAVE SOME LUNCH !!"}
    else if(test >=16 && test< 19){
        greeting_msg.textContent ="STOP YAWNING, GET SOME TEA..IT'S JUST EVENING !"}
    else if(test >= 19 && test < 04 ){
        greeting_msg.textContent ="CLOSE YOUR EYES & GO TO SLEEP !!"  
}


}

setInterval(clock, 1000)
clock();


function alarmTimings(){
    var time = new Date();
    var hour = parseInt(time.getHours().toString().padStart(2,0))
    var ampm = hour >= 12 ? 'PM' : 'AM';

    let format = hour + " " + ampm + " - " + (hour + 1) + " " + ampm;


    let wakeUpTime = document.getElementById("dd1").value;
    let lunchTime = document.getElementById("dd2").value;
    let napTime = document.getElementById("dd3").value;
    let nightTime = document.getElementById("dd4").value;

    if (format == wakeUpTime) {
        document.getElementById("gm-text").innerText = "GOOD MORNING !! WAKE UP!!";
        document.getElementById("pic").style.backgroundImage = "url('Component\ 30\ –\ 1.png')";
    } else if (format == lunchTime) {
        document.getElementById("gm-text").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("pic").style.backgroundImage = "url('Component\ 31 –\ 1.png')";
    } else if (format == napTime) {
        document.getElementById("gm-text").innerText = "GOOD EVENING !!";
        document.getElementById("pic").style.backgroundImage = "url('lunch_image.png')";
    } else if (format == nightTime) {
        document.getElementById("gm-text").innerText = "GOOD NIGHT !!";
        document.getElementById("pic").style.backgroundImage = "url('Component\ 32 –\ 1.png')";
    }

    var dropdown1 = document.getElementById("dd1")
    var dropdown2 = document.getElementById("dd2")
    var dropdown3 = document.getElementById("dd3")
    var dropdown4 = document.getElementById("dd4")



    document.getElementById("timing1").textContent = "Wake up Time: " + dropdown1.options[dropdown1.selectedIndex].text
    document.getElementById("timing2").textContent = "Lunch Time: "  +  dropdown2.options[dropdown2.selectedIndex].text
    document.getElementById("timing3").textContent = "Nap Time: "  +  dropdown3.options[dropdown3.selectedIndex].text
    document.getElementById("timing4").textContent = "Night Time: "  +  dropdown4.options[dropdown4.selectedIndex].text

}



