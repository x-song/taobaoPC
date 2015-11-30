window.onload = function()
{
 // right_bar(); 
 // hidden_box();
 //service();//选项卡
 // good_listsBorder();
 // channelBorder();
 // left_bar();
 // h_shop();
 // wallOver();
 // wallOver_two();
 // f_back();
 // erweima();
 // tab_tt();
  }
  
  function tab_tt(){
	  var search_b = document.getElementById('s_b');
	 var oBtn = document.getElementById('btn');
	 var oUl = document.getElementById('select');
	 var aLi = oUl.getElementsByTagName('li');
		 
	  
	   for(var i=0;i<aLi.length;i++)
	   {
		  
		  aLi[i].onclick = function()
		  { 
			 //oUl.appendChild(this); //插到最后
			 oUl.insertBefore(this,oUl.firstChild);   //插到第一 
			   if(this.className=='tianmao')
			   {
				  search_b.style.border='2px solid #C40000';
				  oBtn.style.background='#C40000';
				 }
				 else{
					  search_b.style.border='2px solid #f40';
				      oBtn.style.background='#f40';
					 }
				
		  }	
		  
		}
		
	
		oUl.onmouseover = function ()
	         {
	            this.style.height='auto';
		 } 
	        oUl.onmouseout = function ()
                 {
	        this.style.height='29px';
	       }
		 
		
		
	$('ul#select li').hover(function(){
		if(!$(this).index()=='0'){
			if($(this).attr('class')=="tianmao"){
				$(this).css('color','#C40000');
				}else{
			      $(this).css('color','#f40');
				}
			}
		},function(){
			$(this).css('color','#000');
			})		
   
	  }
  // function erweima()
  // {
	 //  var ewm = document.getElementById('erweima');
	 //  var ae = document.getElementById('ae');
	 //  ae.onclick = function()
	 //  {
		//   ewm.style.display ='none';
		//   }
	 //  }
  // function f_back()
  // {
	   
	 //   var h_fb = document.getElementById('h_fb');
	 //   var h_idea = document.getElementById('h_idea');
	 //   var idea = document.getElementById('idea');
	 //      cb.onmouseover  = function ()
	 //     {
		//     h_fb.style.display='block';
		//   }
		//  cb.onmouseout  = function ()
	 //   {
		//   h_fb.style.display='none';
		//   } 
		//    idea.onmouseover  = function()
		// {
		// 	h_idea.style.display='block';
		// 	} 
		// idea.onmouseout = function ()
		// {
		// 	h_idea.style.display ='none';
		// 	}
		// h_fb.onclick = function()
		// {
			//document.getElementsByTagName("body")[0].scrollTop=0;//这行也能运行
			//(document.documentElement.scrollTop + document.body.scrollTop)=0  ;
			// window.scrollTo(0,0);
			// 	}
					
	  $(window).scroll(function()
	  {
		   $('div.head-search').stop();
		  var hi = $(window).scrollTop();
		  if(hi>300)
		  {
			  $("a#cb").css("display","block");
			  $('div.head-search').animate({top:'36px'},200);
			  $('div.head-search').css('padding','10px 0');
			  $('div.head-search').css('z-index','100');
		   }else{
		            $("a#cb").css("display","none");
		            $('div.head-search').animate({top:'0'},200);
		            $('div.head-search').css('padding','0');
				
				  }
	  })
   //   }
	 
		
      
 //  function h_shop()
 //  {
	//   var bb = document.getElementById('hidden_shop');
	//   var oDiv= document.getElementById('baobeiDiv');
	//   var aa = document.getElementById('baby');
	//    oDiv.onmouseover = function ()
 //           {
	//   bb.style.display = 'block';
	//    }
	//     oDiv.onmouseout = function ()
 //             {
	//   bb.style.display = 'none';
	//   }
	//  bb.onclick = function ()
	//  {
 //       var temp =aa.innerText;
 //       aa.innerText = bb.innerText;
	//    bb.innerText = temp;
	//    bb.style.display ='none';
	//   }
	 
 // }
 function hidden_box(){
	var admin = document.getElementById('admin');
	var hidden_admin  = document.getElementById('hidden_user');
	var news  = document.getElementById('news');
	var hidden_news = document.getElementById('hidden_news');
	var hidden_mytt = document.getElementById('h-mytaobao');
	var mytaotao = document.getElementById('mytaobao');
	var hidden_shopcar = document.getElementById('hidden-shopcar');
	var shopcar = document.getElementById('shoppingCar');
	var favorite = document.getElementById('favorite');
	var hidden_favorite = document.getElementById('hidden_favorite');
	var xing = document.getElementById('xing');
	var hidden_solder_center = document.getElementById('hidden_solder_center');
	var solder_center =document.getElementById('solder_center');
       
	    admin.onmouseover = function ()
	   {
		this.className="adminClassNameOver username fll";
		hidden_admin.style.display ='block';
		}
		admin.onmouseout = function ()
		{
		 this.className="adminClassNameOut username fll";
		  hidden_admin.style.display = 'none';
		}
			
		news.onmouseover = function ()
	   {
		this.className="adminClassNameOver menu-news fll";
		hidden_news.style.display ='block';
		
		}
		news.onmouseout = function ()
		{
			this.className="adminClassNameOut menu-news fll";
			hidden_news.style.display = 'none';
			}
	   mytaotao.onmouseover = function()
	   {
		     this.className="adminClassNameOver menu-hd fll";
			 hidden_mytt.style.display='block';
		   }
	  mytaotao.onmouseout = function()
	{
		 this.className="adminClassNameOut menu-hd fll";
		   hidden_mytt.style.display = 'none';
			   
			   }
	 shopcar.onmouseover = function ()
	 {
		 this.className="adminClassNameOver menu-hd fll";
		 hidden_shopcar.style.display ='block';
		}
		
		shopcar.onmouseout = function ()
		{
		    this.className="adminClassNameOut menu-hd fll";
			hidden_shopcar.style.display = 'none';
			}
	    favorite.onmouseover = function ()
	   {
		this.className="adminClassNameOver menu-hd fll";
		hidden_favorite.style.display ='block';
		xing.style.color='#f40';
		}
		favorite.onmouseout = function ()
		{
		    this.className="adminClassNameOut menu-hd fll";
			hidden_favorite.style.display = 'none';
			xing.style.color='#9c9c9c';
			}
	   solder_center.onmouseover = function ()
	  {
	   this.className="adminClassNameOver menu-hd fll";
		hidden_solder_center.style.display ='block';
		
		}
		solder_center.onmouseout = function ()
		{
			this.className="adminClassNameOut menu-hd fll";
			hidden_solder_center.style.display = 'none';
			}
	}
	function right_bar(){
      var oDiv = document.getElementById('notice');//获得这个div的id
	  var oli =  oDiv.getElementsByTagName('li'); //获得这个DIV下的li元素
	  var tabcon =document.getElementById('tab_con');  
	  var hid_box=tabcon.getElementsByTagName('div');  //获得这个要隐藏的DIV
          
	   for(var i=0;i<oli.length;i++) //先得到li文字的循环
		{
			oli[i].index = i; 
			oli[i].onmousemove = function()
			{
				for(var i=0;i<oli.length;i++)
				{ 
				    hid_box[i].style.display='none';
					oli[i].className='';
				}
				  this.className='active';
				 hid_box[this.index].style.display='block';
				}
			}
	}
	
	function service()
	{
		var hidden_service =document.getElementById('servie_ft');//得到隐藏的DIV
		var conve_hd =document.getElementById('conve_hd');
		var aLi =conve_hd.getElementsByTagName('li');//得到这个DIV下的li集合
		
		for(var i=0;i<aLi[i].length;i++)
		{
		    aLi[i].onmousemove = function ()
			{
				aLi[i].style.borderBottom='1px solid #fff';
				aLi[i].style.borderLeft='1px solid #e8e8e8';
		        aLi[i].style.borderRight='1px solid #e8e8e8';
			    hidden_service.style.display='block';
		          }
		 }
	}
	
	
	
	function left_bar(){
		var aDiv = document.getElementById('wrap_sidebar').children;
		var aList = [], iLength = aDiv.length || 0;
		
		  while ( iLength-- )
		  {
			if( aDiv[iLength].className && aDiv[iLength].className == "item-list")
			{
				aList.push(aDiv[iLength]);	
			}
		 }
						  
		// function startMove(obj,iTarget)
		// {
		//    clearInterval(obj.timer);
		//     obj.timer = setInterval(function()
		//  {
		//    var speed = (iTarget-obj.alpha)/6	;
		//    speed = speed>0?Math.ceil(speed):Math.floor(speed);
		// 	  if(obj.alpha ==iTarget)
		// 	  {
		// 		clearInterval(obj.timer);
		// 	  }
		// 	else{
		// 	   obj.alpha+=speed;
		// 	   obj.style.width = obj.alpha+'px';
		// 		}	
		// 	},10)
		// }
		
		for(var i =0;i<aList.length;i++)
		{
			aList[i].children[1].alpha = 0;
			aList[i].onmouseover = function (){
			this.children[1].style.display = "block";
			startMove(this.children[1],749);
		}
			aList[i].onmouseout = function ()
			{
			    //this.style.zIndex ='1';
				this.children[1].style.display = "none";
				startMove(this.children[1],0);
			}
			
		}
      		
		}
	
	  function good_listsBorder()
	  {
		  
		  var oDl = document.getElementById('dlContent');
		  var  aGood_list =oDl.children;
		   
		          for(var i=0;i<aGood_list.length;i++)
		         {
			      if(aGood_list[i].getAttribute("class")=='goods-item')
			     {
				 aGood_list[i].onmousemove = function()
				 {
				        this.style.zIndex='2';
				        this.style.border='1px solid #f40';
					
					 }
					  aGood_list[i].onmouseout = function()
				          { 
					 this.style.zIndex='1';
					 this.style.border='1px solid #e8e8e8';
					 }
			  }
		  }
		 
	  }
	
	
	function channelBorder()
	{
		var channelWarp = document.getElementById('channel');
		var aChannel =  channelWarp.children;
		for(var i=0;i<aChannel.length;i++)
		{
			aChannel[i].onmouseover =function ()
			{
				 this.style.zIndex='2';
				 this.style.border='1px solid #f40';
				}
				aChannel[i].onmouseout=function ()
				{
					this.style.zIndex ='1';
					this.style.border ='1px solid #e8e8e8';
				}
			
			}
		}
		
  // function wallOver()
  // {
	 //  var oDiv = document.getElementById('wall');
	 //  var aA = oDiv.children;
	 //  for(var i=0;i<aA.length;i++)
	 //  {
		//   aA[i].onmouseover= function ()
		//   {
		//    this.children[1].style.display ='block';
		//   }
		//   aA[i].onmouseout= function ()
		//   {
		//     this.children[1].style.display ='none';
		//   }
	 // }
	  
  // }	
	  
  //  function wallOver_two()
  // {
	 //  var oDiv = document.getElementById('wall_two');
	 //  var aA = oDiv.children;
	 //  for(var i=0;i<aA.length;i++)
	 //  {
		//   aA[i].onmouseover= function ()
		//   {
		// 	  this.children[1].style.display ='block';
		// 	  }
		// 	  aA[i].onmouseout= function ()
		//   {
		// 	  this.children[1].style.display ='none';
		// 	  }
		//   }
  // }	
	  	
	//图片轮播JQ代码
$(document).ready(function(){
	$('div.point ul li').click(function(){
		$(this).addClass('point-orange').siblings('li').removeClass('point-orange');
		var le=$(this).index();
		$(this).parents('div.point').siblings('div.picWrap').find('ul.picList').animate({marginLeft:-(le*520)},450)
		})
	$('div.it-left').click(function(){
		var a=-(parseInt($(this).siblings('div.picWrap').find('ul.picList').css('marginLeft'))/520)-1;
              if(a<0){
				  $(this).siblings('div.point').find('li:last').trigger('click')
				  }else{
					 $(this).siblings('div.point').find('li').eq(a).trigger('click')
					  }
		})
	$('div.it-right').click(function(){
		var a=-(parseInt($(this).siblings('div.picWrap').find('ul.picList').css('marginLeft'))/520)+1;
              if(a>3){
				  $(this).siblings('div.point').find('li:first').trigger('click')
				  }else{
					 $(this).siblings('div.point').find('li').eq(a).trigger('click') 
					  }
		})
  t=setInterval("showAuto()",2000) // 每隔500毫秒执行一次showAuto函 数恩最好不要小于上面的那个速度
	$('div.point ul li').hover(function(){
		clearInterval(t);
		},function(){
			t=setInterval("showAuto()",2000);
			})
	})
    function showAuto(){
		$('div.it-right').trigger('click')
		}