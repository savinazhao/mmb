$(function () {
   //获取地址栏传过来的标题id
  var couponid = getSearch('couponid');
  var couponTitle = getSearch('couponTitle');
  $('.mmb_header h1').text(couponTitle+'优惠券');
    var arrData = [];
  //根据id请求获取该标题对应的优惠券列表
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getcouponproduct',
    data:{
      couponid:couponid
    },
    success:function (info) {
      console.log(info);
      $('.product-content ul').html(template('tpl_list',info));
      $('.mui-table-view a img').addClass('mui-media-object').addClass('mui-pull-left');
     arrData = info.result;
    }
  });
  //点击弹出蒙层
  $('.mui-table-view').on('click','a',function (e) {
          e.preventDefault();
          var index = +$(this).data('id');
           // console.log(index);
    $('.mo-layer').css('display','block');
     $('.swiper-wrapper').html(template('tpl1',{list:arrData}));
    // 初始化轮播图
    var mySwiper = new Swiper('.swiper-container' ,{
      // 设置小圆点的初始化
     /* pagination: {
        el:'.swiper-pagination'
      },*/
      //开启循环播放
      loop:false,
      //开启自定播放
     /* autoplay:{
        // 配置切换的时间
        delay:2000,
        //配置手动滑了以后，继续自动播放
        disableOnInteraction:false
      
      },*/
      //配置切换的效果
      effect:'slide',
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    
    });
    mySwiper.slideTo(index, 0, true);//切换到第一个slide，速度为1秒
    //点击关闭按钮蒙层隐藏
    $('.close').on('click',function () {
      $('.mo-layer').css('display','none');
    });
  });
 
  
  
})