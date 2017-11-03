

    function changeMouse(){
      var oDiv=document.getElementById('div2');

      oDiv.onmouseover=function()
      {
        startMove(0);
      };
      oDiv.onmouseout=function()
      {
        startMove(-150);
      }
    }
 

    var timer=null;
    function startMove(iTarget){
      var oDiv=document.getElementById('div2');
      clearInterval(timer)

      timer=setInterval(function(){
        var speed=0;

        if (oDiv.offsetLeft>iTarget) 
        {
          speed=-10;
        }
        else
        {
          speed=10;
        }

        if (oDiv.offsetLeft==iTarget) 
          {
            clearInterval(timer);
          }
        else
          {
            oDiv.style.left=oDiv.offsetLeft+speed+'px';
          }
        },30)
    }
 

 function toDou(n){
    if(n<10)
    {
      return '0'+n;
    }
    else
    {
      return ''+n;
    }

  }


function changeImg(){
      var aImg=document.getElementsByTagName('img')
      function tick()
      {
      var oDate=new Date();

      var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());

       // alert(str);

      for (var i = 0; i < aImg.length; i++)
      {
        aImg[i].src='../img/'+str.charAt(i)+'.jpg';
      }

      }
      setInterval(tick,1000);
      tick();
}




















function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload  = func;
	}else{
		window.onlaod= function (){
			oldonload();
			func();
		}
	}
}




addLoadEvent(changeImg);;
addLoadEvent(changeMouse);