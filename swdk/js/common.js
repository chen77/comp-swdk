// 绑定企业页面中间内容区域绑定
$(function(){
	var c_height=$(window).height()-6*16-$('.btn-wrapper').height();
	$('.scroll').height(c_height);
})
// 弹出框居中
function middle(obj){
	var $height_w=$(window).height();
	var _top=($height_w-$(obj).height())/2;
	$(obj).css('top',_top);
}
middle('#bound_suc');
middle('#bound_code');
middle('#email');//邮箱发送居中
middle('#hrAdd');//新增开票员居中

// 发票推送滚动区域
$(function(){
	$('#fp-send').height($(window).height()-7.5*16);
})
