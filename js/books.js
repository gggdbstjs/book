$('header').load('inc.html header');

$('footer').load('inc.html footer');


let data;

let idx;

let txt;

$('.category > button').each(function(k,v){
    if($(v).text() == localStorage.getItem("key1")){
        $('.category > button > p').eq(k).addClass('active');
        txt = localStorage.getItem("key1") ;
        if(txt=='베스트셀러'){
            dataFn('',null,'SalesPoint',`${20}`);
        }else if(txt=='신간 도서'){
            dataFn('',null,'PublishTime',`${20}`)
        }else{
            dataFn(txt,null,'PublishTime',`${40}`);
        }
        // abc(s,d);
        
        setTimeout(function(){
            localStorage.removeItem("key1")
            },500)
        }
})


////////// 알라딘 검색 api /////////////////////////////////////////////////////
function abc(s, d) {
    data = d;
    let dataList = '';
    console.log(d)
    $.each(d.item, function (i, v) {
        //  let dice = Math.ceil(Math.random() * 2)
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
            
            //  if($('.item').data('dice') == 2){
    
            //     $('.brick_left').addClass('active')
            //      $('.brick_bot').addClass('active')
            //      $('.book_title p').addClass('active')
            //  }
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
    txt = $(this).text();
    idx = $(this).index();
    
    $('.category > button > p').removeClass('active');
    $('.category > button > p').eq(idx).addClass('active');


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

    
    $('.pup').css('display', 'block');
    
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


//  페이지 버튼 생성 및 구현    
//  팝업 '다음, 이전' 버튼 동작


// 난수 설정으로 상자 색상 변경.
//  첫화면 '베스트셀러' on 만들기.
