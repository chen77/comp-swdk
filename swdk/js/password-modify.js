// var url='http://123.56.27.123:30443//delegate/enterprise/updatePassword'
$(function(){
	var reg=/^[a-z0-9_-]{6,20}$/;
	$('#submit').on('click',function(){
		var oldword=$('#old_word').val();
		var neword=$('#new_word').val();
		var wordagain=$('#word_again').val();
		if(oldword==''||neword==''||wordagain==''){
			alert('输入项不能为空！');
			return;
		}
		if(neword.length<6||wordagain.length<6){
			alert('输入的密码小于6位数请重新输入');
			return;
		}else if(!reg.test(neword)){
			alert('输入的密码必须是数字或字母');
		}

		if(neword!=wordagain){
			alert('两次输入的密码不一致');
			return;
		}
		var arg={
			id:'406133977640861823',
			password:neword,
			oldPassword:'234567',
		};
		$.ajax({
			url:'http://123.56.27.123:30443/delegate/enterprise/updatePassword',
			type:'post',
			data:{
				"token":"E206FC54E838F8A1012A988A655C9166",
				"data":JSON.stringify(arg)
			},
			datatype:'json',
			// timeout:1,
			success:function(data){//返回成功
				if(data.flag=='0'){
					alert('密码修改成功');
				}else{
					 alert('密码修改不成功');
				}
			},
			error:function(data){
				alert('网络异常');
			}
		})
	})

})