
function animate(obj,json,callback){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var isStop = true;
			for (var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr]-now)/5;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=='opacity') {
					obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				var current = now+speed;
				if(json[attr]!==current){
					isStop = false;
				}
			}					
			if(isStop){
				clearInterval(obj.timer)
				callback&&callback();
			}
	 	},20)	
}
function getStyle(obj,style){
	if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
	}else{
			return obj.currentStyle[style];
	}
}
window.onload=function(){
	var img1s=document.getElementById('img1s');
    var img2s=document.getElementById('img2s');
    var sliders=document.getElementById('sliders');
    var Bimgs=document.getElementById('Bimgs');
    var boxs=document.getElementById('boxs');
    var d=document.getElementById('d');
    var s=document.getElementById('s');
    var xa1=document.getElementById('xa1');
    var xa2=document.getElementById('xa2');
    var xa3=document.getElementById('xa3');
    var cnt=document.getElementById('cnt'); 
    var dec=document.getElementById('dec');
    var add=document.getElementById('add');
    var tx=document.getElementById('tx');
    var fu=document.getElementById('fu');
    var tan=document.getElementById('tan');
    var xe=document.getElementById('xe');
    var mt=document.getElementById('mt');
    var g1=document.getElementById('g1');
    var g2=document.getElementById('g2');
    var g3=document.getElementById('g3');
    var g4=document.getElementById('g4');
    var g31=document.getElementById('g31');
    var g31img=new Image();
    
    g31img.src="img/erwei.png";
    
    g1.onmouseover=function(){
        g1.style.right="-20px"
    }
    g1.onmouseout=function(){
        g1.style.right="-80px"
    }
    g2.onmouseover=function(){
        g2.style.right="-20px"
    }
    g2.onmouseout=function(){
        g2.style.right="-80px"
    }
    g3.onmouseover=function(){
        g3.style.right="-20px"
        g3.removeChild(g31);
        g3.append(g31img);

    }
    g3.onmouseout=function(){
        g3.style.right="-80px"
        g3.removeChild(g31img);
        g3.append(g31);
    }
    g4.onmouseover=function(){
        g4.style.right="-20px"
    }
    g4.onmouseout=function(){
        g4.style.right="-80px"
    }



    var imgk=new Image();
    
    var srrh=document.getElementsByTagName('srrh');
    imgk.src="img/pp0.jpeg";
    img1s.appendChild(imgk);
    img1s.onmouseover=function(){
      sliders.style.display='block';
      img2s.style.display='block';
    }
    img1s.onmouseout=function(){
      sliders.style.display='none';
      img2s.style.display='none';
    }

    img1s.onmousemove=function(ev){
      var oL=ev.clientX-sliders.offsetWidth-60;
      var oT=ev.clientY-sliders.offsetHeight-25;
      var oMaxw=img1s.offsetWidth-sliders.offsetWidth;
      var oMaxh=img1s.offsetHeight-sliders.offsetHeight;
      oL=oL>oMaxw?oMaxw:oL<0?0:oL;
      oT=oT>oMaxh?oMaxh:oT<0?0:oT;
      sliders.style.left=oL+'px';
      sliders.style.top=oT+'px';

      var scale=Bimgs.offsetHeight/img1s.offsetHeight;
      Bimgs.style.left=-oL*scale+'px';
      Bimgs.style.top=-oT*scale+'px';
    }
    s.onmouseover=function(){
    	s.style.border="2px solid #ff0754";
    	d.style.border="";
    	imgk.src="img/pp1.jpeg";
    	img2s.src='img/sp1.jpeg';
    	Bimgs.src='img/bpp1.jpg';
    }
    d.onmouseover=function(){
		d.style.border="2px solid #ff0754";
		s.style.border="";
    	imgk.src="img/pp0.jpeg";
    	img2s.src='img/sp0.jpeg';
    	Bimgs.src='img/bpp0.jpg';
    }
    xa1.onclick=function(){
    	xa1.style.backgroundImage="url('img/duigou.png')";
    	xa1.style.backgroundRepeat="no-repeat";
    	xa1.style.backgroundPosition="38px  25px";
    	xa1.style.border="1px solid red";
    	xa3.value="\"150ml\"";
    	xa2.style.backgroundImage='';
    	xa2.style.backgroundRepeat='';
    	xa2.style.backgroundPosition='';
    	xa2.style.border='';
    }
    xa2.onclick=function(){
    	xa2.style.backgroundImage="url('img/duigou.png')";
    	xa2.style.backgroundRepeat="no-repeat";
    	xa2.style.backgroundPosition="38px  25px";
    	xa2.style.border="1px solid red";
    	xa3.value="\"200ml\"";
    	xa1.style.backgroundImage='';
    	xa1.style.backgroundRepeat='';
    	xa1.style.backgroundPosition='';
    	xa1.style.border='';
    }
    
    add.onclick=function(){
    	if(cnt.value<'5'){
    		cnt.value++;
    	}
    	else{
    		add.style.cursor="not-allowed";
    	}
    }
    dec.onclick=function(){
    	if(cnt.value>'0'){
    		cnt.value--;
    	}
    	else{
    		add.style.cursor="not-allowed";
    	}
    }
    tx.onclick=function(){
    	fu.style.display="block";
    	tan.style.display="block";
    }
    mt.onclick=function(){
    	fu.style.display="none";
    	tan.style.display="none";
    }
    xe.onclick=function(){
    	fu.style.display="none";
    	tan.style.display="none";
    }
    
    
}

