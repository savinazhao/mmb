$(function () {
  // 获取分类标题的数据动态渲染
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getcategorytitle',
    success:function (info) {
      console.log(info);
      $('.category-title').html(template('tpl_title',info));
    }
  });
  
  //点击标题a 获取对应的分类列表数据 动态渲染
    $('.category-title').on('click','.ti',function () {
        var titleId = $(this).data('titleid');
        var $this = $(this);
          $.ajax({
            type:'get',
            url:'http://localhost:9090/api/getcategory',
            data:{
              titleid:titleId
            },
            success:function (info) {
              console.log(info);
              $this.next('.category-content').html(template('tpl_list',info));
      
            }
          });
      $this.next('.category-content').toggleClass('hide');
    });
  
})