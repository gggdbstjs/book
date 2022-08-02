

// 북샵 메뉴 클릭
    $(document).ready(function(){
        $('div.bookshop_menu a').click(function(){
            var tab_id = $(this).attr('data-tab');
            var test_id = $(this).attr('rel');
            $('div.bookshop_menu a').removeClass('current');
            $('div.bookshop_tab_content').removeClass('current');
            $('img.bookshop_main_content').removeClass('current');
            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
            $("#"+test_id).addClass('current');
        })
    })


// 북샵 join
$('.bookclub_join_Btn').on('click',function(){
    $('.bookclub_join').show();})
$('.bookclub_join_close').on('click',function(){
    $('.bookclub_join').hide();})

// 북샵 json 내용 넣기
fetch('bookshop.json')
    .then(function(item){    return item.json()   })
    .then(function(shopData){ 

        const UlShop = document.querySelector('.bookshop_item ul');

        function bookshopItem(){
            let tags = [];
            let list = '';
            
            shopData.bookshop_list.forEach(function(v){            
                tags.push(`
                <li>
                    <div class="bookshop_item_box_1">
                        <img src="${v.main}" class="bookshop_item_first_img">
                    </div>
                    <div class="bookshop_item_box_2">
                        <b>${v.item}</b>
                        <p>가격 : ${v.price}원</p>
                        <button>
                            <img src="./img/heart_off.svg">
                        </button>
                    </div>
                </li>`)
            });
            tags.forEach(function(v){
            list += v;
            });
            UlShop.innerHTML = list;
            // 하트 클릭이벤트
            let good = [],idx=0;
            $('.bookshop_item_box_2 button').on('click',function(){
                let idx = $(this).parents('li').index();
                good.push(idx);
                localStorage.heart = good;
                $(this).find('img').attr('src',"./img/heart_on.svg");});
            // 팝업 클릭이벤트
            $('.bookshop_item li').on('click',function(){
                idx = $(this).index();
                $('.pup').show();
                popupFn();
            });
            
            // 팝업 내용
            function popupFn(){
                
                let tagsdetail = '';
                shopData.bookshop_list.forEach(function(v,i){ 
                    if(idx == i){
                        //start
                        tagsdetail =  `<div class="pup_left">
                            <div class="pupL_cont">
                                <div class="pupL_cont_img">
                                    <div><img src=${v.main}></div>
                                    <ul>
                                    <li><img src="${v.image1}"></li>
                                    <li><img src="${v.image2}"></li>
                                    <li><img src="${v.image3}"></li>
                                    <li><img src="${v.image4}"></li>
                                    <li><img src="${v.image5}"></li>
                                    <li><img src="${v.image6}"></li>
                                    </ul>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="pup_right">
                            <div class="pupR_cont">
                                    <h2>${v.item}</h2>
                                    <span class="pupR_cont_price">${v.price}원</span>
                                    <hr class="pupR_cont_line_1" size="2">
                                    <figure>${v.text}</figure>
                                    <hr class="pupR_cont_line_2" size="2">
                                    <p>민음 BOOK SHOP</p>
                            </div>
                        </div>
                        <div class="btn">
                            <div class="btn_X" style="cursor: pointer;">
                                <div class="btn_X_line-box">
                                    <span class="btn_X_line-01"></span>
                                    <span class="btn_X_line-02"></span>
                                </div>
                            </div>
                        </div>`;
                        
                        $('.pup_wrap').html(tagsdetail);

                        $('.btn_X').on('click',function(){
                            $('.pup').hide();
                        });
                        //end
                    }
                });
            }

            
    
                }
                bookshopItem();
    
        });

window.onload = function bookshop_Thumb(){
    const elThumb = document.querySelectorAll('.pupL_cont_img li'),
    elDetail = document.querySelector('.pupL_cont_img > div > img'),
    elPtag = document.querySelector('.pupL_cont_img p');
    let elOffset = [];
        elThumb.forEach(function(el,key){
            elOffset.push(
                {
                    w:el.offsetWidth,
                    h:el.offsetHeight,
                    x:el.offsetLeft,
                    y:el.offsetTop
                }                    
            )
            el.onclick = function(){    
                elDetail.src = el.children[0].src;
                elPtag.style = `
                    width:${el.offsetWidth}px; 
                    height:${el.offsetHeight}px;
                    left:${el.offsetLeft}px; 
                    top:${el.offsetTop}px;
                `;
            }   
        }
    )
}
    
    // const Bookclub_Btn = document.querySelector('.bookclub_box > button'),
    // Bokkclub_join = document.querySelector('.bookclub_join'),
    // Bookclub_Close = document.querySelector('.bookclub_join_close');
    // Bookclub_Btn.addEventListener('click',function(){
    // Bokkclub_join.classList.add('active');});
    // Bookclub_Close.addEventListener('click',function(){
    // Bokkclub_join.classList.remove('active');});
    
    
    
