(function (){
	var arrImg = [];//图片数组
	var time = 300; //总时间（毫秒）
	var delay = 10;//时间间隔
	init();//初始化
	m_banner();
	function m_banner(){
		var left1 = 0;
		var left2 = 100;
		var tem = time/delay;//一张图片轮播需要运行多少次
		var x = 100/tem;//每过10毫秒需要滑动x px;
		run(left1,left2,x,tem);
	}
	function run(left1,left2,x,tem){
	var point = setInterval(function(){
			left1-=x;
			left2-=x;
			arrImg[0].style.left = left1+"%";
			arrImg[1].style.left = left2+"%";
			if(left2<=x){
				change();//改变图片位置
				clearInterval(point);
				setTimeout(function(){m_banner()},1000);
				
			}
	},10);
	}

	function init(){
		console.log('初始化');
		$('#wrapper img').each(function (a,b){
			 arrImg[a] = b;
		})
	}
	function change(){
		temp = arrImg[0];
		arrImg[0] = arrImg[1];
		arrImg[1] = arrImg[2];
		arrImg[2] = temp;
	}

}())

