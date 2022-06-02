//公用方法

define(function(require, exports, module){
   var common = {
   "hoverShow":function(dom){
   	dom.css("display","block");

   },
   "hoverHidden":function(dom){
		dom.css("display","none");
   },
   	"stratMove":function(obj,iTarget)
		{
		   clearInterval(obj.timer);
		    obj.timer = setInterval(function()
		 {
		   var speed = (iTarget-obj.alpha)/6	;
		   speed = speed>0?Math.ceil(speed):Math.floor(speed);
			  if(obj.alpha ==iTarget)
			  {
				clearInterval(obj.timer);
			  }
			else{
			   obj.alpha+=speed;
			   obj.style.width = obj.alpha+'px';
				}	
			},10)
		},
	"range":function(iNum,iMax,iMin){
       
       if(iNum>iMax){
       	return iMax;

       }else if(iNum<iMin){
       	return iMin;

       }
       else{
       	return iNum;
       }
	},
	"toTop":function(){
		window.scrollTo(0,0);
	}


   }
	
 exports.common = common;
});