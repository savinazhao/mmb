$(function () {
  //获取店铺数据
     $.ajax({
       type:'get',
       url:'http://localhost:9090/api/getgsshop',
       success:function (info) {
         console.log(info);
         $('#shop').html(template('tpl1',info));
       }
     });
     // 获取凑单品的区域数据
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getgsshoparea',
    success:function (info) {
      console.log(info);
      $('#area').html(template('tpl2',info));
      
    }
  });
  function render() {
     var shopId =$('#shop').val() || 0;
     var areaId = $('#area').val()|| 0;
     $.ajax({
       type:'get',
       url:'http://localhost:9090/api/getgsproduct',
       data:{
         shopid:shopId,
         areaid:areaId
       },
       success:function (info) {
         console.log(info);
         $('.product-content ul').html(template('tpl_list',info));
       }
     })
  }
  render();
  //监听店铺和地区的选择框改变事件
  $('#shop,#area').on('change',function () {
          render();
  })
  
})