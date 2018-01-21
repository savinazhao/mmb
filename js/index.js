$(function () {
    // 请求获取菜单栏的数据
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getindexmenu',
    success:function (info) {
      console.log(info);
      /*组装数据和模板*/
      $('.menu').html(template('tpl_menu1',info));
      var lis = $('.menu li');
      var id = +$("[data-name='more']").data('id');
      // console.log(id);
      lis.each(function (i,e) {
        var dataid = $(this).data('id');
        // console.log(dataid);
        if(  dataid >id) {
             $(e).addClass('hide');
           }
      })
    }
  });
  /*点击更多*/
  $('.menu').on('click',"[data-name='more']",function () {
    var id = +$(this).data('id');
     var lis = $('.menu li');
     lis.each(function (i,e) {
          if(i>id) {
            $(this).toggleClass('hide');
          }
     })
     
  });
  
  /*获取折扣商品的列表数据*/
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getmoneyctrl',
    success:function (info) {
      console.log(info);
      /*组装数据和模板*/
     $('.mui-table-view').html(template('tpl_list',info));
     $('.mui-table-view a img').addClass('mui-media-object').addClass('mui-pull-left');
    }
  })
  
})