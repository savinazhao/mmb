$(function () {
  var data  = [];
  var mainHeight = $('.mmb_main').outerHeight(true);
  var liHeight ;
  var item=0;
  //请求国内折扣商品列表的数据
    $.ajax({
      type:'get',
      url:'http://localhost:9090/api/getinlanddiscount',
      success:function (info) {
        console.log(info);
        data = info.result;
         var list = loadData(item/6+1);
         $('.product-content ul').html(template('tpl_list',{list:list}));
           liHeight =$('.product-content li').outerHeight(true);
           item = item+6;
        // console.log(liHeight);
      }
    });
  var scroll = mui('.mui-scroll-wrapper').scroll();
  document.querySelector('.mui-scroll-wrapper').addEventListener('scroll', function (e ) {
         // console.log(scroll.y);
        var scrollTop = Math.abs(scroll.y);
          if(scrollTop +10 >= getScrollTop(item)){
            var  datas =  loadData(item/6+1);
        var htmlStr = template('tpl_list',{list:datas});
        $('.product-content ul').append(htmlStr);
            item=item+6;
          }
    
    
  });
  
  function getScrollTop(item) {
     return item/2*liHeight-mainHeight;
  }
  function loadData(page) {
    var pageSize = 6;
    if (data.length>0){
      var result = [];
      var i = (page-1)*pageSize;
      var indexBound = page*pageSize;
      if (indexBound > 20){
        indexBound = 20;
      }
      for(i; i < indexBound; i++) {
        result.push(data[i]);
      }
      console.log(result);
      return result;
    }
  }
  
})