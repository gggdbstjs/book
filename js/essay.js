//썸네일
let data;

$.ajax({
    url: "ssh.xml",
    success: function (xml) {
        data = xml;
        thumb();
        console.log('OK')
        $('.grid-item').on('click', pup);
        $('.btn_x').on('click', pupX);
    }
})

function thumb() {
    let elData = '';

    $(data).find('item').each(function () {
        let thumb = $(this).find('thumb').text();
        let title = $(this).find('title').text();
        let isbn = $(this).find('isbn').text();

        elData += `<div class="grid-item" data-isbn="${isbn}">
                        <div>
                            <img src="${thumb}" alt="">
                        </div>
                        <p>${title}</p>
                    </div>`;

        $('.grid').html(elData);
    })
}

function pup() {
    event.preventDefault();
    let isbn = $(this).attr('data-isbn');
    
    let i = $(this).index();
    

    $(data).find('item').each(function () {
        if( $(this).find('isbn').text() == isbn ) {
            let title = $(this).find('title').text();
            let date = $(this).find('date').text();
            let thumb = $(this).find('thumb').text();
            let name = $(this).find('name').text();
            let detail = $(this).find('detail').html();

            console.log(detail)

            pupL = `<div class="pupL_cont">
                        <h2>${title}</h2>
                        <span>${date}</span>
                        <figure><img src="${thumb}" alt=""></figure>
                        <p>${name}</p>
                    </div>`

            $('.pup_left').html(pupL);
            $('.pupR_cont').html(detail);
        }
    })
    
    $('.pup').css('display', 'block');
    
    
}


function pupX() {
    $('.pup').css('display', 'none');
}




// masonry 플러그인
window.addEventListener('load',init);

function init(){
    var elem = document.querySelector('.grid');
      var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        gutter: 70
      });
}


// xml에서 href, src url 과 같은 경로 값 불러오기