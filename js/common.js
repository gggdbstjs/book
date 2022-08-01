$('header').load('./inc.html header > div');
$('footer').load('./inc.html footer > div');
$('.top').load('./inc.html .top > div');

$('.search_btn_header').on('click',function(){
    $('.search').addClass('active');
})
$('.close').on('click',function(){
    $('.search').removeClass('active');
})

$('.top').click(function(){
    $('body,html').animate({scrollTop:0},400);
    return false;
});
