$(function () {
  var pageId = 0;
  render();
     function render() {
          $.ajax({
            type:'get',
            url:'http://localhost:9090/api/getmoneyctrl',
            data:{
              pageid:pageId
            },
            success:function (info) {
              console.log(info);
              /*组装模板和数据*/
              $('.mui-table-view').html(template('tpl_list',info));
              $('.mui-table-view a img').addClass('mui-media-object').addClass('mui-pull-left');
              //渲染分页
              $('#pagination').pagination(info.totalCount,{
                prev_text: "上一页",
                next_text: "下一页",
                num_display_entries:5,
                current_page:pageId,
                //初始化时是否执行回调函数
                load_first_page:false,
                callback:function (index) {
                  console.log(index);
                  pageId = index;
                  render();
                }
              });
            }
          })
     }
  
   
})