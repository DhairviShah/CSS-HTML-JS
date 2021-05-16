setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // calcilations to get exact hours, minutes and seconds

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
  
    //movement of hands intialized.....

    hour.style.transform = `rotate(${hrotation}deg)`;  
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);