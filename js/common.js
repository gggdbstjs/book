$('header').load('./inc.html header > div');
$('footer').load('./inc.html footer > div');
$('.top').load('./inc.html .top > div')


$('.top').click(function(){
    $('body,html').animate({scrollTop:0},400);
    return false;
});
 


$('header').ready(function(){

    setTimeout(function(){

        $('.menu li').eq(1).on('click',function(){
            list = '베스트셀러'
            localStorage.setItem("key1", list);
        })
        },50)
})
