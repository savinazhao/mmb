$(function () {
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getbrandtitle',
    success:function (info) {
      console.log(info);
      $('.category-title').html(template('tpl_list',info));
    }
  })
})