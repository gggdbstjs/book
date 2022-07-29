// 베스트셀러 : 웹에서 동작 구현이 안됨 (터치만 인식)



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
                        가격: ${v.priceStandard} 원<br>
                        출간일: ${v.pubDate}<br>
                        ISBN: ${v.isbn13}
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








///////// 민음 이야기


let winH = $(window).height();
let scrollY;


$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    about_Y = $('.story').offset().top;

    if(about_Y - winH < scrollY){
        $('.story > h2 > span').addClass('active');
        $('.story > h2 > em').addClass('active');
    }
})


/////////////// 신간 도서


function aaa(s, d) {
    let dataList = '';
    $.each(d.item, function (i, v) {
        dataList += `
        <div class="swiper-slide new_item">
            <img src="${v.cover}">
            <p>${v.title}</p>
        </div>
        `;
    })

    $('.new > .slick_new').html(dataList);


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
        delay:1000,
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
            Start: 1,
            MaxResults: 20,
            Sort: "PublishTime"
        }
    })







///////// Littor

$(window).on('scroll',function(){
    scrollY = $(window).scrollTop();
    about_Y = $('.littor_wrap').offset().top;

    if(about_Y - winH < scrollY){
        $('.littor_wrap > .title').addClass('active');

    }
})




/////////// 하루 한문장

$.ajax({
    url: "quotes.json",
    success: function (json) {
        data = ($(json).get().reverse());
        console.log(data)
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
