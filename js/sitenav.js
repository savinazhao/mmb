$(function () {
  //获取所有商城导航的列表数据信息
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getsitenav',
    success:function (info) {
      console.log(info);
      $('.product-content  ul').html(template('tpl',info));
    }
  })
})