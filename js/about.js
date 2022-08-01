
let winH = $(window).height();
let scrollY;


$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    about_Y = $('.about_wrap').offset().top;

    if(about_Y - winH < scrollY){
        $('.about_wrap > h2> p').addClass('active');
    }
})

$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    about_Y = $('.series_wrap').offset().top;

    if(about_Y - winH < scrollY){
        $('.series_wrap > h2> p').addClass('active');
    }
})



//  각 시리즈 이미지 클릭시 '원하는 값'의 books페이지로 이동.let list='';
$('.series > div').each(function(k,v){

    $(v).on('click',function(){
        list = $('.series a').eq(k).text()
        localStorage.setItem("key1", list);
        location.href= $(this).find('a').attr('href');
    })
})