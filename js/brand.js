$(function () {
  var brandTitleId = getSearch('brandTitleId');
  var brandTitle = getSearch('brandTitle');
  var title = brandTitle.slice(0,brandTitle.indexOf('十'));
   $('.hot').text(title+'哪个牌子好');
   $('.hd1 h3').text(title+'产品销量排行');
   $('.hd2 h3').text(title+'最新评论');
  //1. 获取品牌标题对应的十大品牌
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getbrand',
    data:{
      brandtitleid:brandTitleId
    },
    success:function (info) {
      console.log(info);
      $('.category-title').html(template('tpl_list',info));
      
    }
  });
  //2.品牌标题对应的十大品牌的销量排行商品列表
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getbrandproductlist',
    data:{
      brandtitleid:brandTitleId,
      pagesize:4
    },
    success:function (info) {
      console.log(info);
    $('.mui-table-view').html(template('tpl2',info));
      $('.mui-table-view a img').addClass('mui-media-object').addClass('mui-pull-left');
          if(info.result.length>0) {
             var productId = info.result[0].productId
            $.ajax({
              type:'get',
              url:'http://localhost:9090/api/getproductcom',
              data:{
                productid:productId
              },
              success:function (info1) {
                console.log(info1);
                info1.result.forEach(function (e,i) {
                  e.productName= info.result[0].productName;
                  e.productImg = info.result[0].productImg;
                })
                //渲染评论列表
                $('.comm-list ul').html(template('tpl3',info1));
      
              }
            });
          }
    }
  });
  
  
})