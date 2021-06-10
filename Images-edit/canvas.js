const canvas=document.getElementById("canvas1");
canvas.width=window.innerWidth; 
const ctx=canvas.getContext("2D");
//canvas width remains same as windows wisth even after resizing


//wheneve window is resized the following function executes.
window.addEventListener('resize',function(){
	ctx.fillRect(10,10,40,40);
})


ctx.fillStyle="red";
ctx.fillStroke="blue";
ctx.lineWidth=5;
ctx.beginPath();
ctx.arc(100,100.50,0,Math.PI*2);
ctx.stroke();
ctx.fill();