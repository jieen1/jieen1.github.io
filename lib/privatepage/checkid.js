//身份校验方法，在页面加载后执行
$(document).ready(function () {
	a = getCookie('times');
	if(a == null || a == ""){
		a=3;
	}
	if(a > 0){
		username = getCookie('username');
		if(username == null || username == ""){
			username = prompt("Please enter your name use letters\nyou can try " + a + " times today:","");
			if(username == 'jieen'){
				setCookie('username',username,1);
			}
			else{
				setCookie('times',a-1,1);
				alert("Wrong Password!!!");
				window.opener = null;  
				window.close(); 
			}
		}
	}else{
		alert("you have run out of the chance!!!");
		window.opener = null;  
        window.close(); 
	}
})

//设置cookie方法
function setCookie(c_name,value,expiredays){
	var exdate = new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

//检查是否已设置cookie方法
function getCookie(c_name){
	if(document.cookie.length > 0){
		c_start = document.cookie.indexOf(c_name + "=");
		if(c_start != -1){
			c_start += c_name.length + 1;
			c_end = document.cookie.indexOf(";",c_start);
			if(c_end == -1){
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return "";
}

