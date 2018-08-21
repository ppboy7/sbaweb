$(document).ready( function(){

if($.cookie('user')){
	$('#login2').show();
	$('#login').hide();
	$('.vip').show(2000);
	$('#member').html($.cookie('user'));
					}
	
	else{
	$('#login2').hide();
	$('login').show();
	}
$('#logout').click(function(){$.removeCookie('user');
location.reload();
});
				  
				  
				  
});

	function loadmusic(){
	/*lookfor 能否使用html5儲存的功能 ie等瀏覽器不支援*/
	if(window.localStorage){console.log("localStorage-none-error")
	}else{
	$('.aplayer').hide();
	$('.player').css('autoplay','true')
	$('.player').show();
	};};
/*加載*/
	function setup(){/*開始的時候因爲1366會造成重叠問題所以要一。導覽列顯示内容隱藏二。導覽列隱藏内容顯示*/
	var a=window.innerWidth;
	if(a<1505){/*小於1505px框會重叠所以隱藏*/
	$("#section").hide(200);
	$(".closebutton").hide(200);
	$(".text").hide(200);
	$(".content").addClass("contentbig");
	$(".content").removeClass("content");
	$(".openbutton").show(200);
	$(".word").show(200);
	$('html,body').animate({scrollTop:$('.text').offset().top},1200);/*跳到錨點tp*/
	$(".photo").css("margin-right","0px");
	/*console.log("小框模式加載完成");*//*debug*/
	}
	/*如果偵察到有1505以上px就可以不隱藏*/
	else{
	$(".word").show(200);
	$(".photo").show(200);
	$(".photo").css("margin-right","0px");
	$('html,body').animate({scrollTop:$('.text').offset().top},1200);/*跳到錨點tp*/
	/*console.log("大框模式加載完成");*//*debug*/
	};
};
	function setup2(){
	$('html,body').animate({scrollTop:$('.text').offset().top},1200);/*跳到錨點tp*/
	};
	function toolow(){
		var a=document.documentElement.scrollTop;
		if(a>=500){
			$('').show();
		};
	};
	function error(){
		$('.aplayer').hide();
	};
	function reset() {
    var a = document.getElementById('inputtxt');
	var b = document.getElementById('inputfmname')
    if (!a.value || a.value != a.defaultValue && confirm('reset?')) {/*判斷有沒有改變過*/
        a.value = a.defaultValue;/*變回預設*/
    };
	 if (!b.value || b.value != b.defaultValue && confirm('reset?')) {/*判斷有沒有改變過*/
        b.value = b.defaultValue;/*變回預設*/
    };
};
$(".inputbt").click(function(){
var txt1 = $(".inputfmname").val();
var txt2 = $(".inputtxt").val();
var tag = "<div class=\"fmf\"><span class=\"fmname\">作者 :"+txt1+"</span><p class=\"fmtxt\">"+txt2+"</p></div><br></div>";
$(".fm").after(tag);
$('html,body').animate({scrollTop:$('.inputfmf').offset().top},1200);
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 99 || document.documentElement.scrollTop > 99) {
        document.getElementById("myBtn").style.display = "block";
		document.getElementById("myBtn1").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
		document.getElementById("myBtn1").style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html,body').animate({scrollTop:$('.text').offset().top},1200);
};

// When the user clicks on the button, scroll to the top of the document
function topFunction1() {  
var scrollHeight = $('.frame').prop("scrollHeight");
$('html,body').animate({scrollTop:scrollHeight}, 1200);
var scrollHeight = $('.frame1').prop("scrollHeight");
$('html,body').animate({scrollTop:scrollHeight}, 1200);
$('html,body').animate({scrollTop:$('.tpbr').offset().top},1200);
$('html,body').animate({scrollTop:$('.inputfmf').offset().top},1200);
};
