function lh() {
	var a=window.innerHeight;/*那瀏覽器高度*/
	var b=document.getElementById("word");/*iframe*/
	var d=document.documentElement.scrollTop;/*取樣滾輪*/	
	var e=window.innerWidth;/*那瀏覽器寬度*/
	/*如果發現滾輪位置與上方大過或等於100（即標題px）把數值變回100*/
	var f=document.documentElement.scrollTop;
	if (d>=100){
		f=100;
	};
	/*畫面超過滑下550px啓動
	if (d>=550){
		$('html,body').animate({scrollTop:$('#tp').offset().top},1200);
	};
	*/
	var c=a-400+f;/*通過基本減法把網頁的高度減去圖片框300跟標題100的高度加滾輪與上方距離傳入c變量中*/
	b.height=c;/*將c變量傳到iframe屬性中*/
	/*框過少隱藏*/
	if (e<1344){
	$(".word").hide(1000);
	$(".photo").hide(1000);
	$("#section").show(1000);
	$(".closebutton").show(1000);
	$(".text").show(1000);
	$(".closebutton").show(1000);
	$(".openbutton").hide(1000);
	$(".contentbig").addClass("content");
	$(".contentbig").removeClass("contentbig");
	};
	/*置中部分*/
	
	/*定義*/
	var g = $('.content').width();
	var i = $('#story').width();
	var l = $('#tp').width();
	var j = $('.contentbig').width();
	
	/*計算*/
	if(g>0){/*當有此框*/
	var h = (g-300-i)/2;
	var m = (g-300-l)/2;
	$("#story").css("margin-left",h);
	$("#tp").css("margin-left",m);};
	
	/*計算*/
	if(j>0){/*當有此框*/
	var k = (j-300-i)/2;
	var n = (j-300-l)/2;
	$("#story").css("margin-left",k);
	$("#tp").css("margin-left",n);};
	
	/*計算*/
	if(e<1505){/*因爲小於1505px會隱藏文字跟圖片框所以不用減去300px*/
	var h = (g-i)/2;
	var m = (g-l)/2;
	$("#story").css("margin-left",h);
	$("#tp").css("margin-left",m);	
	};
	/*debug用*/
	/*console.log("瀏覽器高"+a+"px"+"文本框最後大小為"+c+"px"+"瀏覽器長"+d+"px"+"瀏覽器寬"+e+"px");*/
	/*console.log(j+"big");console.log(g+"small");*/
	}setInterval(lh, 0);/*無限loop時間間距為0*/