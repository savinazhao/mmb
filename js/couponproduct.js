$(function () {
   //获取地址栏传过来的标题id
  var couponid = getSearch('couponid');
  var couponTitle = getSearch('couponTitle');
  $('.mmb_header h1').text(couponTitle+'优惠券');
  
  
  //根据id请求获取该标题对应的优惠券列表
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getcouponproduct',
    data:{
      couponid:couponid
    },
    success:function (info) {
      console.log(info);
      $('.product-content ul').html(template('tpl_list',info));
      $('.mui-table-view a img').addClass('mui-media-object').addClass('mui-pull-left');
      
    }
  })
})