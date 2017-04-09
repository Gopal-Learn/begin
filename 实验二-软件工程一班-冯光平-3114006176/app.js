	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	// #9E9E9E
	// #716E6E
	var A1 = function(){	//绘制矩形
		context.fillStyle = "#9E9E9E";
		context.fillRect(40,40,30,500);
		context.fillRect(40,40,250,30);		
		context.fillRect(100,90,190,50);		
	}

	var A2 = function(){		//绘制圆形
		context.beginPath();
		context.strokeStyle = "#9E9E9E";
		context.arc(55,40,15,0,2*Math.PI,false);
		context.moveTo(290,55);

		context.arc(290,55,15,0,2*Math.PI,false);
		context.moveTo(100,115);

		context.arc(100,115,25,0,2*Math.PI,false);
		context.moveTo(290,115);

		context.arc(290,115,25,0,2*Math.PI,false);
		context.closePath();

		context.fill();
		context.stroke();
	}


	var A3 = function(){
		// context.lineWidth = 7px;
		context.beginPath();
		context.moveTo(140,70);
		context.lineTo(140,90);
		context.moveTo(143,70);
		context.lineTo(143,90);
		context.moveTo(210,70);
		context.lineTo(210,90);
		context.moveTo(213,70);
		context.lineTo(213,90);
		context.closePath();
		context.stroke();
	}

	var A4 = function(){
		context.beginPath();
		context.arc(135, 115, 20, 0, Math.PI*2); //arc(圆心x,圆心y,半径,开始的角度,结束的角度,是否逆时针)
		context.closePath();
		
		var linear = context.createRadialGradient(135,115,20,135,115,0); //创建径向渐变context.createRadialGradient(x0,y0,r0,x1,y1,r1) x0,y0,r0表示开始圆的中心坐标，r0表示开始圆的半径，x1,y1,r1表示结束圆的中心坐标，r1表示结束圆的半径;
		linear.addColorStop(0.1,'#FF3030'); // addColorStop(介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置，CSS 颜色值)
		linear.addColorStop(0.5,'#FF6347');
		linear.addColorStop(1,'#FF6A6A');
		context.fillStyle = linear; //把渐变赋给填充样式
		context.fill();
		
		context.stroke();
	}

	var A5 = function(){
		context.beginPath();
		context.arc(195, 115, 20, 0, Math.PI*2); //arc(圆心x,圆心y,半径,开始的角度,结束的角度,是否逆时针)
		context.closePath();
		
		var linear = context.createRadialGradient(195,115,20,195,115,0); //创建径向渐变context.createRadialGradient(x0,y0,r0,x1,y1,r1) x0,y0,r0表示开始圆的中心坐标，r0表示开始圆的半径，x1,y1,r1表示结束圆的中心坐标，r1表示结束圆的半径;
		linear.addColorStop(0.1,'#FFFF00'); // addColorStop(介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置，CSS 颜色值)
		linear.addColorStop(0.5,'#F0E68C');
		linear.addColorStop(1,'#FFF68F');
		context.fillStyle = linear; //把渐变赋给填充样式
		context.fill();
		
		context.stroke();
	}

	var A6 = function(){
		context.beginPath();
		context.arc(255, 115, 20, 0, Math.PI*2); //arc(圆心x,圆心y,半径,开始的角度,结束的角度,是否逆时针)
		context.closePath();
		
		var linear = context.createRadialGradient(255,115,20,255,115,0); //创建径向渐变context.createRadialGradient(x0,y0,r0,x1,y1,r1) x0,y0,r0表示开始圆的中心坐标，r0表示开始圆的半径，x1,y1,r1表示结束圆的中心坐标，r1表示结束圆的半径;
		linear.addColorStop(0.1,'#008B00'); // addColorStop(介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置，CSS 颜色值)
		linear.addColorStop(0.5,'#00CD00');
		linear.addColorStop(1,'#00EE00');
		context.fillStyle = linear; //把渐变赋给填充样式
		context.fill();
		
		context.stroke();
	}


	A1();
	A2();
	A3();
	A4();
	A5();
	A6();