var canvas = document.getElementById("canvas");
		/*2d圖案+定義x===canvas*/
		var x = canvas.getContext("2d");
		
		x.strokeStyle = '#7CFC00';
		x.lineWidth = 10;
		/*影子*/
		x.shadowBlur= 15;
		x.shadowColor = '#7CFC00';
		/*由於圓圈的表達方式是pi/180 出現這個funtion*/
		function degToRad(degree){
			var factor = Math.PI/180;/*圓pi*/
			return degree*factor;/*返回值*/
		}

		function renderTime(){
			/*先定義*/
			var now = new Date();/*日期*/
			var today = now.toDateString();/*只拿年月日*/
			var time = now.toLocaleTimeString("en-US");/*只拿時間*/
			var hrs = now.getHours();/*只拿時*/
			var min = now.getMinutes();/*只拿分*/
			var sec = now.getSeconds();/*只拿秒*/
			var mil = now.getMilliseconds();/*只拿微秒*/
			
			/*這裏分成兩個數*/
			var smoothsec = sec+(mil/1000);/*秒+（微秒/1000）,形成秒微秒*/
			var smoothmin = min+(smoothsec/60);/*分鐘+秒微秒*/

			/*Background*/
			
			//漸變
			
			//createRadialGradient(xStart, yStart, radiusStart, xEnd, yEnd, radiusEnd)
			gradient = x.createRadialGradient(125, 125, 2.5, 125, 125, 150);
			//進行漸變
			gradient.addColorStop(0, "#03303a");//開始
			gradient.addColorStop(1, "black");//結束
			//顔色填充
			x.fillStyle = gradient;
			//x.fillStyle = 'rgba(00 ,00 , 00, 1)';
			x.fillRect(0, 0, 500, 500);
			
			
			/*這裏算時分秒3個圓*/
			/*canvas的圓是從3點方向開始算起*/
			/*Hours*/
			
			x.beginPath();
			/*x.arc(x,y,r,sAngle,eAngle)270是變會垂直 小時是12為單位 *30 =360 現成圓 -90 是令它編成垂直*/
			x.arc(125,125,100, degToRad(270), degToRad((hrs*30)-90));
			x.stroke();
			
			/*Minutes*/
			
			x.beginPath();
			/*x.arc(x,y,r,sAngle,eAngle)270是變會垂直 分鐘是60為單位 *6 =360 現成圓 -90 是令它編成垂直*/
			x.arc(125,125,85, degToRad(270), degToRad((smoothmin*6)-90));
			x.stroke();
			
			/*Seconds*/
			
			x.beginPath();
			/*x.arc(x,y,r,sAngle,eAngle)270是變會垂直 秒是60為單位 *6 =360 現成圓 -90 是令它編成垂直*/
			x.arc(125,125,70, degToRad(270), degToRad((smoothsec*6)-90));
			x.stroke();
			
			
			/*Date*//*Date*//*Date*/
			
			x.font = "12.5px Helvetica";/*字體*/
			
			//x.fillStyle = 'rgba(r, g, b, a)'
			x.fillStyle = 'rgba(124, 252, 00, 1)';/*字體顔色*/
			
			//x.fillText(年日月, x, y);
			x.fillText(today, 80, 125);/*日期*/
			
			
			/*Time*//*Time*//*Time*/
			
			x.font = "12.5px Helvetica Bold";/*字體*/
			//x.fillStyle = 'rgba(r, g, b, a)'
			x.fillStyle = 'rgba(124, 252, 00, 1)';/*字體顔色*/
			//x.fillText(内容, x, y)
			x.fillText(time+":"+mil, 87.5, 140);

		}
		setInterval(renderTime, 10);//loop(funtion,反應時間)