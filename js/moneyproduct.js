$(function () {
  //获取产品的id
  var productId = getSearch('productId');
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getmoneyctrlproduct',
    data:{
      productid :productId
    },
    success:function (info) {
      console.log(info);
    $('.mmb_product').html(template('tpl',info));
      
    }
  })
})