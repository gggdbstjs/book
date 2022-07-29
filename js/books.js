$('header').load('inc.html header');

$('footer').load('inc.html footer');


let data;

let idx = 0;




////////// 알라딘 검색 api /////////////////////////////////////////////////////
function abc(s, d) {
    data = d;
    let dataList = '';
    console.log(d)
    $.each(d.item, function (i, v) {
        dataList += `
            <li class="item" data-isbn="${v.isbn13}">
                <div class="brick_left"></div>
                <div class="book_cover">
                    <img src="${v.cover}">
                </div>
                <div class="book_title">
                    <p>${v.title}</p>
                    <div class="brick_bot"></div>
                </div>
            </li>`;
    })

    $('.books > div ul').html(dataList);
    $('.item').on('click', pup)
    $('.btn_x').on('click', pupX)

}

function dataFn(str,p,s,m) {
    $.ajax({
        method: "get",
        dataType: "jsonp",
        jsonp: "abc",
        url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
        data: {
            Query: str + ' 민음사',
            QueryType: "",
            TTBKey: "ttbgggdbstjs1055001",
            output: "JS",
            cover: "big",
            callback: "abc",
            Start: p,
            MaxResults: m,
            Sort: s
        }
    })
}




////////////////////////////////////////////////////////////////////////


///// 서브메뉴 버튼 클릭 이벤트
$('.category > button').on('click',function(){
    let txt = $(this).text();

    $('category > button > p').eq(idx).removeClass('active');
    $('category > button > p').addClass('active');
    idx = $(this).index();


    if(txt=='베스트셀러'){
        dataFn('',null,'SalesPoint',`${20}`);
    }else if(txt=='신간 도서'){
        dataFn('',null,'PublishTime',`${20}`)
    }else{
        dataFn(txt,null,'PublishTime',`${40}`);
    }
})



function pup() {
    event.preventDefault();
    let isbn = $(this).data('isbn');
    let p = $(data.item, function (k, v) {
        v.isbn13 == isbn;
    })
    console.log(p)
    let i = $(this).index();
//     author: "정재율 지음"
// categoryName: "국내도서>소설/시/희곡>시>한국시"
// cover: "https://image.aladin.co.kr/product/29644/29/cover/8937409186_1.jpg"
// description: "민음의 시 298권. 정재율 시인의 첫 번째 시집. 섬세하고 투명한 ‘마음’을 닮은 시편들로 꾸준한 주목을 받아 왔던 정재율 시인의 작품들이 시집이라는 ‘몸’을 가지게 된 것이다. 마음을 담은 이 한 권의 몸은 혼자인 듯 혼자가 아니고, 흔쾌히 산뜻하지만 한없이 가볍지 않으며, 불현듯 슬프지만 곱씹을수록 용감하다."
// isbn13: "9788937409189"
// priceStandard: 12000
// pubDate: "2022-06-06"
// title: "몸과 마음을 산뜻하게"
    
    $('.pup').css('display', 'block');
    
    pupInfo = `
    <div class="pup_infor">
                    <p>
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


    $('.pup_left img').attr('src', `${p[i].cover}`);
    $('.pup_title h2').text(`${p[i].title}`);
    $('.pup_title p').text(`${p[i].author}`);
    $('.pup_right').html(pupInfo);
    
}

function pupX() {
    $('.pup').css('display', 'none');
}


//  페이지 버튼 생성 및 구현    
//  팝업페이지에서 . 
//  기본 페이지 '베스트셀러' on 만들기.
