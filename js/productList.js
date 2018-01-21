$(function () {
   //获取地址栏的参数
      var categorgId = getSearch('categoryid');
      // var categoryName = getSearch('category');
      var pageId = 1;
       /* if(categoryName) {
          $('.product_list_title .categoryName').text(categoryName);
        }*/
     //1.根据categoryId请求获取分类名称
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getcategorybyid',
    data:{
      categoryid:categorgId
    },
     success:function (info) {
       console.log(info);
       $('.product_list_title .categoryName').text(info.result[0].category);
     }
    
  });
        
        
         render();
  function render() {
        //请求商品列表的数据
        $.ajax({
          type:'get',
          url:'http://localhost:9090/api/getproductlist',
          data:{
            categoryid:categorgId,
            pageid:pageId
          },
          success:function (info) {
            console.log(info);
            $('.mui-table-view').html(template('tpl_list',info));
            $('.mui-table-view a img').addClass('mui-media-object').addClass('mui-pull-left');
            //渲染分页
            $('#pagination').pagination(info.totalCount,{
              prev_text: "上一页",
              next_text: "下一页",
              num_display_entries:5,
              current_page:pageId-1,
              //初始化时是否执行回调函数
              load_first_page:false,
              callback:function (index) {
                console.log(index);
                pageId = index+1;
                render();
              }
            });
      
          }
        })
      }
    
});