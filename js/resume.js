   function BodyChildren(){
   	var body_element = document.getElementsByTagName('')[0];
   		





   }    














    $('button').popover();




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


    var aImg=document.getElementsByTagName('img')
            
    function tick(){
        var oDate=new Date();

        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());

             // alert(str);

        for (var i = 0; i < aImg.length; i++)
            {
              aImg[i].src='img/'+str.charAt(i)+'.jpg';
            }

    }
    setInterval(tick,1000);
    tick();
    
































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


addLoadEvent(toDou);
addLoadEvent(BodyChildren);