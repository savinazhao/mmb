$(function () {
  
  //请求国内折扣商品列表的数据
    $.ajax({
      type:'get',
      url:'http://localhost:9090/api/getinlanddiscount',
      success:function (info) {
        console.log(info);
      $('.product-content ul').html(template('tpl_list',info));
      }
    })
})