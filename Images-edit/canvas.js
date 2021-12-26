var image1,image2,image3,image4,image5,image6,image7;

function doupload(){
  var dd1=document.getElementById("id2");
  image1=new SimpleImage(dd1);
    var can=document.getElementById("can1");
  image1.drawTo(can);
}
function doupload2(){
  var dd1=document.getElementById("id4");
  image2=new SimpleImage(dd1);
  var can=document.getElementById("can2");
  image2.drawTo(can);
}
function doupload3(){
  var dd1=document.getElementById("id5");
  image3=new SimpleImage(dd1);
    var can=document.getElementById("can3");
  image3.drawTo(can);
}
function doupload4(){
  var dd1=document.getElementById("id7");
  image4=new SimpleImage(dd1);
  var can=document.getElementById("can5");
  image4.drawTo(can);
}
function doupload5(){
  var dd1=document.getElementById("id9");
  image5=new SimpleImage(dd1);
  var can=document.getElementById("can6");
  image5.drawTo(can);
}
function doupload6(){
  var dd1=document.getElementById("id11");
  image6=new SimpleImage(dd1);
  var can=document.getElementById("can7");
  image6.drawTo(can);
}
function doupload7()
{
  var dd1=document.getElementById("id15");
  image7=new SimpleImage(dd1);
  var can=document.getElementById("can8");
  image7.drawTo(can);
}
function doprison(){
  image4.setSize(250,150);
  var y=0;
  var x;
  var pix,ct,ct2;
  while(y<150)
    {
       x=0;
       
      while(x<250){
         ct=0;
        while(ct<42)
        {ct++;x++;}
      
         ct2=0;
        while(ct2<=10 && x<250)
          {
            ct2++;
            pix=image4.getPixel(x,y);
            pix.setRed(0);pix.setGreen(0);pix.setBlue(0);
            image4.setPixel(x,y,pix);
            x++;
          }
      }
      y++;
    }
  var can=document.getElementById("can5");
  image4.drawTo(can);
  can.style.border="10px solid black"
}
function dochange(){
  
  for(var pix of image1.values())
    {
      var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
      pix.setRed(avg);
      pix.setGreen(avg);
      pix.setBlue(avg);
    }
  
  var can=document.getElementById("can1");
  image1.drawTo(can);
}

function bgchange(){
 
  image2.setSize(250,150);
  image3.setSize(250,150);
   for(var pix of image2.values())
    {
      if(pix.getRed()>200 && pix.getGreen()>200 && pix.getBlue()>200)
        {
          var x=pix.getX();
          var y=pix.getY();
          var pix2=image3.getPixel(x,y);
          pix.setRed(pix2.getRed());
          pix.setGreen(pix2.getGreen());
          pix.setBlue(pix2.getBlue());
        }
    }
  var can=document.getElementById("can4");
  image2.drawTo(can);
}

function doblur(){
  
  image5.setSize(250,150);
  var x=0;
  var y=0;
  var pix1,pix2,pix3,pix4,pix5,pix6,pix7,pix8,pix9;
  
  while(y<147)
    {
      x=0;
      while(x<247)
        {
           pix1=image5.getPixel(x,y);
           pix2=image5.getPixel(x+1,y);
           pix3=image5.getPixel(x+2,y);
           pix4=image5.getPixel(x,y+1);
           pix5=image5.getPixel(x+1,y+1);
           pix6=image5.getPixel(x+2,y+1);
           pix7=image5.getPixel(x,y+2);
           pix8=image5.getPixel(x+1,y+2);
           pix9=image5.getPixel(x+2,y+2)
          image5.setPixel(x,y,pix9);
          image5.setPixel(x+1,y,pix8);
          image5.setPixel(x+2,y,pix7);
          image5.setPixel(x,y+1,pix6);
          image5.setPixel(x+2,y+1,pix4);
          image5.setPixel(x,y+2,pix3);
          image5.setPixel(x+1,y+2,pix2);
          image5.setPixel(x+2,y+2,pix1);
          x=x+2;
        }
      y=y+2;
    }
  var can=document.getElementById("can6");
  image5.drawTo(can);
}

function dodecode(){
  var res="";
  var i=0;
var len=3;
  // alert(image6.getHeight());
for(var pixel of image6.values()){
    
 
    if(i>=len+2)
    break;
    
    if(i===0){
        if(pixel.getRed()%16!=2 || pixel.getGreen()%16!=1 || pixel.getBlue()%16!=6){
        res="sorry no text to display";break;}
    }
    else if(i==1)
    {
        len=16*(pixel.getRed()%16)+pixel.getGreen()%16;
    }
    else{
    asci1=pixel.getRed()%16;
    asci2=pixel.getGreen()%16;
    res+=String.fromCharCode(asci1*16+asci2);
    }
    i++;
}

 var can=document.getElementById("id14");
 can.innerHTML=res;
}
function doencode(){

  var str=document.getElementById("id16").value;
  var i=0;   
  var n=str.length;  
  
var pix,asci1,asci2;

for (var pixel of image7.values()) {
    
    if(i>=(n+2))
    break;
      
      if(i===0){
          pixel.setRed(Math.floor(pixel.getRed()/16)*16+2);
          pixel.setGreen(Math.floor(pixel.getGreen()/16)*16+1);
          pixel.setBlue(Math.floor(pixel.getBlue()/16)*16+6);
      }
      else if(i==1)
      {
         asci1=n/16;
         asci2=n%16;
         pixel.setRed(Math.floor(pixel.getRed()/16)*16+asci1);
         pixel.setGreen(Math.floor(pixel.getGreen()/16)*16+asci2);
      }
      else{
          var str2=str[i-2];
          asci1=str2.charCodeAt(0);
          asci2=asci1%16;
          asci1=asci1/16;
          pixel.setRed(Math.floor(pixel.getRed()/16)*16+asci1);
          pixel.setGreen(Math.floor(pixel.getGreen()/16)*16+asci2);
      }
    i++;
    

}
  var can=document.getElementById("can9");
  image7.drawTo(can);
  // alert("encoded successfully.Download the image to decode\nrevisit again");
}
