


//////////////// 베스트셀러 
function best(s, d) {
    let dataList = '';
    let rv = ($(d.item).get().reverse())
    // let rvi = rv.i();
    $.each(rv, function (i, v) {

        dataList += `
        <div class="pageL">
            <p style= "background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('img/best/best_${i}.jpg') 50% 50% no-repeat; background-size:cover;"></p>
            <img src="img/best/best_${i}.jpg">
        </div>
        <div class="pageR">
            <div class="info">
                <div>
                    <h3>${v.title}</h3>
                    <b>${v.author}</b>
                    <p>
                        <b>가격</b>: ${v.priceStandard} 원<br>
                        <b>출간일</b>: ${v.pubDate}<br>
                        <b>ISBN</b>: ${v.isbn13}
                    </p>
                    <p>${v.description}</p>
                    <p>
                        <span>출판사 | 민음사</span><span>p.0${i+1}</span>
                    </p>
                </div>
            </div>
        </div>
        `;
    })

    $('.best_wrap > .flipbook').html(dataList);

    $('.best_wrap > .flipbook').prepend('<div class="cover_f"><p><img src="img/drag.png"></p></div>');
    $('.best_wrap > .flipbook').append('<div class="cover_b"></div>');

    

function loadApp() {

	// Create the flipbook

	$('.flipbook').turn({
			// Width

			
			// Height


			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

	});
}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['js/turn.js'],
	nope: ['js/turn.html4.min.js'],
	both: ['css/basic.css'],
	complete: loadApp
});



}

    $.ajax({
        method: "get",
        dataType: "jsonp",
        jsonp: "abc",
        url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
        data: {
            Query:' 민음사',
            QueryType: "",
            TTBKey: "ttbgggdbstjs1055001",
            output: "JS",
            cover: "big",
            callback: "best",
            Start: 1,
            MaxResults: 9,
            Sort: "SalesPoint"
        }
    })

/////////////// 버튼 아이콘
let list='';
$('.icon_btn > a').each(function(k,v){

    $(v).on('click',function(){
        list = $('.icon_btn > a > span').eq(k).text()
        localStorage.setItem("key1", list);
    })
})






///////// 민음 이야기


let winH = $(window).height();
let scrollY;


$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    about_Y = $('.story').offset().top + $(".story").innerHeight();

    if(about_Y - winH < scrollY){
        $('.story > h2 > span').addClass('active');
        $('.story > h2 > em').addClass('active');
    }
})


/////////////// 신간 도서

let data;
function aaa(s, d) {
    data = d
    let dataList = '';
    $.each(d.item, function (i, v) {
        dataList += `
        <div class="swiper-slide new_item" data-isbn="${v.isbn13}">
            <img src="${v.cover}">
            <p>${v.title}</p>
        </div>
        `;
    })

    $('.new > .slick_new').html(dataList);
    $('.new_item').on('click', pup)
    $('.btn_x').on('click', pupX)

}

var swiper = new Swiper(".new", {
    slidesPerView: 8,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:2000,
        disableOnInteraction: false
    },
    initialSlide: 3 
  });


    $.ajax({
        method: "get",
        dataType: "jsonp",
        jsonp: "abc",
        url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
        data: {
            Query:' 민음사',
            QueryType: "",
            TTBKey: "ttbgggdbstjs1055001",
            output: "JS",
            cover: "big",
            callback: "aaa",
            Start: 3,
            MaxResults: 20,
            Sort: "PublishTime"
        }
    })

    function pup() {
        event.preventDefault();
        let isbn = $(this).data('isbn');
        let p = $(data.item, function (k, v) {
            v.isbn13 == isbn;
        })
        let i = $(this).index();
        console.log(p)
    
        
        $('.pup').css('display', 'block');
        
        pupInfo = `
        <div class="pup_infor">
                        <p>
                            <b>제목</b> | ${p[i].title}<br>
                            <b>분류</b> | ${p[i].categoryName}<br>
                            <b>출판일</b> | ${p[i].pubDate}<br>
                            <b>ISBM</b> | ${p[i].isbn13}<br>
                            <br>
                            <b>가격:</b> ${p[i].priceStandard}원
                        </p>
                        <p>
                        ${p[i].description}
                        </p>
                        <p>출판사 | 민음사</p>
                    </div>
        ` 
    
        $('.pup_left img').attr('src', `${p[i].cover}`);
        $('.pup_left h2').text(`${p[i].title}`);
        $('.pup_left p').text(`${p[i].author}`);
        $('.pup_right').html(pupInfo);
        
        
        $('.btn_next').on('click',function(){
            i ++;
        $('.pup_left img').attr('src', `${p[i].cover}`);
        $('.pup_left h2').text(`${p[i].title}`);
        $('.pup_left p').text(`${p[i].author}`);
        pupInfo = `
        <div class="pup_infor">
                        <p>
                            <b>제목</b> | ${ p[i].title}<br>
                            <b>분류</b> | ${ p[i].categoryName}<br>
                            <b>출판일</b> | ${ p[i].pubDate}<br>
                            <b>ISBM</b> | ${ p[i].isbn13}<br>
                            <br>
                            <b>가격:</b> ${p[i].priceStandard}원
                        </p>
                        <p>
                        ${p[i].description}
                        </p>
                        <p>출판사 | 민음사</p>
                    </div>
        ` 
        $('.pup_right').html(pupInfo);
        })
    
        $('.btn_prev').on('click',function(){
            i --;
        $('.pup_left img').attr('src', `${p[i].cover}`);
        $('.pup_left h2').text(`${p[i].title}`);
        $('.pup_left p').text(`${p[i].author}`);
        pupInfo = `
        <div class="pup_infor">
                        <p>
                            <b>제목</b> | ${ p[i].title}<br>
                            <b>분류</b> | ${ p[i].categoryName}<br>
                            <b>출판일</b> | ${ p[i].pubDate}<br>
                            <b>ISBM</b> | ${ p[i].isbn13}<br>
                            <br>
                            <b>가격:</b> ${p[i].priceStandard}원
                        </p>
                        <p>
                        ${p[i].description}
                        </p>
                        <p>출판사 | 민음사</p>
                    </div>
        ` 
        $('.pup_right').html(pupInfo);
        })
    }
    
    function pupX() {
        $('.pup').css('display', 'none');
    }





///////// Littor

$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    about_Y = $('.littor_wrap').offset().top;

    if(about_Y - winH < scrollY){
        $('.littor_wrap > .title').addClass('active');

    }
})
$('.littor_wrap > .title').each(function(k,v){

    $(v).on('click',function(){
        list = $('.littor_wrap h2').eq(k).text()
        localStorage.setItem("key1", list);
        location.href= 'books.html';
    })
})




/////////// 하루 한문장

$.ajax({
    url: "quotes.json",
    success: function (json) {
        data = ($(json).get().reverse());
        card();
    }
})
function card() {
    let elData = '';
    $.each(data, function (k, v) {
        elData += `
        <div class="swiper-slide card_item"><img src="${v.card}"></div>
        `;

        $('.quote > .card').html(elData);
    })
}

var swiper = new Swiper(".quote", {
    effect: "cards",
    grabCursor: true,
});
