function setup() {
  createCanvas(0, 0);
}

function draw() {
  let d = day();
  let m = month();
  let y = year();
  let h = hour();
  let min = minute();
  let sec = second();
  let ms = millis()/1000; //this will be number of seconds since the program has started

//   //background(100);
//   fill(127,127,127,d/30*255);
//   ellipse(width/2,height/2,min/60*width,min/60*height); //minute
//   fill(d/30*255,127,127,5);
//   ellipse(width/2,height/2,sec/60*width,sec/60*height); //second
  
  
  // make it so we can see what these variables are
    print('year '+y,'day '+d, 'hour '+h, 'minute '+m, 'second '+sec,);
  fill(255,255,255);
  let ts = 20;
  let tpy = mouseY;
  let tpx = mouseX;
  textSize(ts);
  text('year '+y,tpx,tpy+ts);
  text('day '+d,tpx,tpy+ts*2);
  text('hour '+h,tpx,tpy+ts*3);
  text('minute '+min,tpx,tpy+ts*4);
  text('second '+sec,tpx,tpy+ts*5);
  
}