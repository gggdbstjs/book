$('header').load('./inc.html header > div');
$('footer').load('./inc.html footer > div');

$('.search_btn_header').on('click',function(){
    $('.search').addClass('active');
})
$('.close').on('click',function(){
    $('.search').removeClass('active');
})
