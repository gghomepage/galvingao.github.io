function getRTime(){ 
var EndTime= new Date('2016/9/2 17:00:00'); //截止时间 
var NowTime = new Date();
var t =EndTime.getTime() - NowTime.getTime(); 
/*var d=Math.floor(t/1000/60/60/24); 
t-=d*(1000*60*60*24); 
var h=Math.floor(t/1000/60/60); 
t-=h*60*60*1000; 
var m=Math.floor(t/1000/60); 
t-=m*60*1000; 
var s=Math.floor(t/1000);*/ 

var d=Math.floor(t/1000/60/60/24); 
var h=Math.floor(t/1000/60/60%24); 
var m=Math.floor(t/1000/60%60); 
var s=Math.floor(t/1000%60); 

document.getElementById("t_d").innerHTML = d + "天"; 
document.getElementById("t_h").innerHTML = h + "时"; 
document.getElementById("t_m").innerHTML = m + "分"; 
document.getElementById("t_s").innerHTML = s + "秒"; 
} 
setInterval(getRTime,1000); 
