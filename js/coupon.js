$(function () {
  //获取优惠券的标题
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getcoupon',
    success:function (info) {
      console.log(info);
      $('.mmb_main ul').html(template('tpl_list',info));
    }
  })
})