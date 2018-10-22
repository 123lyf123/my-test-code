
$(document).ready(function(){	
	/* ----------doris 点击一级菜单，显示子菜单；点击其他一级菜单，关闭前一级菜单下的子菜单  ---------- */
	$('.dropmenu').click(function(e){
		e.preventDefault();
		//$(this).parent().find('ul').slideToggle();
		$(this).parent().find('ul').show();

		var divId=$(this).parent().find('ul').attr("id");
		$('.dropmenu').each(function(){
			var divid1=$(this).parent().find('ul').attr("id");
			if(divId==divid1){//本身显示并且加载第一个子菜单页面
			}else{//其他子菜单隐藏
				$(this).parent().find('ul').hide();
			}
		})
	});
			
	/* ---------- Acivate Functions ---------- */
	widthFunctions();
		
});


/* ---------- Page width functions ---------- */

$(window).bind("resize", widthFunctions);

function widthFunctions(e) {
	
    var winHeight = $(window).height();
    var winWidth = $(window).width();

	var contentHeight = $("#content").height();

	if (winHeight) {
		
		$("#content").css("min-height",winHeight);
		
	}
	
	if (contentHeight) {
		
		$("#sidebar-left2").css("height",contentHeight);
		
	}
    
	if (winWidth < 980 && winWidth > 750) {
		
		if($("#sidebar-left").hasClass("span2")) {
			
			$("#sidebar-left").removeClass("span2");
			$("#sidebar-left").addClass("span1");
			
		}
		
		if($("#content").hasClass("span10")) {
			
			$("#content").removeClass("span10");
			$("#content").addClass("span11");
			
		}	
					
	} else {
		
		if($("#sidebar-left").hasClass("span1")) {
			
			$("#sidebar-left").removeClass("span1");
			$("#sidebar-left").addClass("span2");
			
		}
		
		if($("#content").hasClass("span11")) {
			
			$("#content").removeClass("span11");
			$("#content").addClass("span11");
			
		}
	}

}