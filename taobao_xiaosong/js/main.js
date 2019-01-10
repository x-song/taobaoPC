define(function(require, exports, module){



	 var common = require('./common.js').common; 

	 $("#baobeiDiv").hover(function(){
	 	$("#hidden_shop").show();
	 },function(){
	 $("#hidden_shop").hidden();
	 });
	 $("#ae").click(function(){
	 	$("#erweima").css("display","none");
	 });
	 var $h_fb  = $("#h_fb");
	 $("#cb").hover(function(){
	 	common.hoverShow($h_fb);
	 },function(){
		common.hoverHidden($h_fb);
	 })

	 $("#wall>a,#wall_two>a").hover(function(){
  
	 		$(this).find("div").show().end().siblings('a').find('div').hide();
	 	},function(){
	 		$(this).find("div").hide();
	 	})

	 $("#admin,#news,#mytaobao,#shoppingCar,#favorite,#solder_center").hover(function(){
		$(this).addClass("adminClassNameOver").removeClass("adminClassNameOut");
		$(this).children("div").show();
		},function(){
			$(this).children("div").hide();
			$(this).addClass("adminClassNameOut").removeClass("adminClassNameOver");
	 });

	$("#channel").children("div").hover(function(){
		$(this).css({"z-index":2,"border":"1px solid #f40"});
	},function(){
		$(this).css({"z-index":1,"border":"1px solid #e8e8e8"});
	});



	$("#notice ul").find("li").mousemove(function(){
		var $this_index = $(this).index();
		$(this).addClass("active").siblings("li").removeClass("active");
		$("#tab_con").find("div").hide();
		 $("#tab_con").find("div").eq($this_index).show();
	
	});


	$("#dlContent").find("div.goods-item").hover(function(){
		$(this).css({"z-index":2,"border":"1px solid #f40"});
	},function(){
		$(this).css({"z-index":1,"border":"1px solid #e8e8e8"});
	})

	$("#select li").click(function(){
		$(this).prependTo('#select');
		if($(this).className()=="tianmao"){
			$("#s_b").css("border","2px solid #C40000");
			$("#btn").css("background","#C40000");
		}else{
			$("#s_b").css("border","2px solid #f40");
			$("#btn").css("background","#f40");
		}


	})

	$("#select").hover(function(){
		$(this).css("height","auto");
	},function(){
		$(this).css("height","29px");
	})
	

	//运动函数
	$(".item-list").hover(function(){
		// $(this).find("div.hidden-item").alpha = 0;
		$(this).find("div.hidden-item").show();
		// common.stratMove($(this).find("div.hidden-item"),749);
		$(this).find("div.hidden-item").stop().animate({width:"749px"},300);
	},function(){
		$(this).find("div.hidden-item").hide();
		// common.stratMove($(this).find("div.hidden-item"),0);
		$(this).find("div.hidden-item").stop().animate({width:"0px"},300);
	}) 
});