$(function(){
				$(".money").hover(function(){
					$(this).addClass("aticy");
				},function(){
					$(this).removeClass("aticy");
				})
				$(".button_mobile").click(function(){
					$(".button_pc a img").attr("src","img/PC端_未选中.png");
					$(".button_mobile a img").attr("src","img/移动端选中.png");
					$(".PC_prize").css("display","none");
					$(".mobile_prize").css("display","block");
					$(".Glory_gift").css("display","none");
					$(".mobile_Glory").css("display","block");
					$(".rules").css("display","none");
					$(".mobile_rules").css("display","block");
				})
				$(".button_pc").click(function(){
					$(".button_pc a img").attr("src","img/PC按钮.png");
					$(".button_mobile a img").attr("src","img/移动按钮.png");
					$(".PC_prize").css("display","block");
					$(".mobile_prize").css("display","none");
					$(".Glory_gift").css("display","block");
					$(".mobile_Glory").css("display","none");
					$(".rules").css("display","block");
					$(".mobile_rules").css("display","none");
				})
				
				
})