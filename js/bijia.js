$(function () {
  //获取产品id
    var productId = getSearch('productId');
    //获取分类的id
  var categoryId = getSearch('categoryId');
  var proName = getSearch('proName');
  console.log(productId);
  console.log(categoryId);
  //根据各类id获取分类的名称
     $.ajax({
       type:'get',
       url:'http://localhost:9090/api/getcategorybyid',
       data:{
         categoryid:categoryId
       },
       success:function (info) {
         console.log(info);
    $('.product_list_title').html(template('tpl_nav',info));
          $('.proName').text(proName);
       }
     });
  //根据产品的id获取产品详情
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getproduct',
    data:{
      productid:productId
    },
    success:function (info) {
      console.log(info);
     $('.product_bijia').html(template('tpl1',info));
     $('.plist').html(template('tpl2',info));
     
      
    }
  });
  
  //获取商品的评论
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getproductcom',
    data:{
      productid:productId
    },
    success:function (info) {
      console.log(info);
      $('.comment').html(template('tpl3',info));
    }
  })
})