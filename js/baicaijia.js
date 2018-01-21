$(function () {
  mui('.bcj-head-cat .mui-scroll-wrapper').scroll({
    scrollY: false, //是否竖向滚动
    scrollX: true, //是否横向滚动
    //配置是否显示滚动条
    indicators: false, //不显示滚动条
  });
  
  mui('.mmb_main .mui-scroll-wrapper').scroll({
    //配置是否显示滚动条
    indicators: false, //不显示滚动条
  });
  //获取白菜价的标题
    $.ajax({
      type:'get',
      url:'http://localhost:9090/api/getbaicaijiatitle',
      success:function (info) {
        console.log(info);
        $('.bcj-head-cat ul').html(template('tpl-title',info));
        var lis = $('.bcj-head-cat ul li');
        var  width = 0;
          lis.each(function (i,e) {
            width += $(e).outerWidth(true);
          });
    // var   width =lis.outerWidth(true)*lis.length;
    $('.bcj-head-cat ul').width(width);
      }
    });
    //获取白菜价对应标题的商品列表
  
    function render(titleId) {
      var titleid = titleId || 0;
         $.ajax({
          type:'get',
           url:'http://localhost:9090/api/getbaicaijiaproduct',
           data:{
             titleid:titleid
           },
           success:function (info) {
             console.log(info);
             $('.product-content ul').html(template('tpl_list',info));
             
           }
         })
    }
    render();
    
    //给标题的a注册点击事件
  $('.bcj-head-cat').on('click','a',function (e) {
      e.preventDefault();
       $(this).parent('li').addClass('active').siblings().removeClass('active');
       var titleid = $(this).data('titleid');
         render(titleid);
  
  
  })
  
  
  
  
  
})