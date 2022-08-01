//썸네일
function init() {
    let data;

    $.ajax({
        url: "ssh.xml",
        success: function (xml) {
            data = xml;
            thumb();
            console.log('OK')
            $('.grid-item').on('click', function () { pup($(this).index()) });
            $('.btn_x').on('click', pupX);
        }
    })

    function thumb() {
        let elData = '';

        $(data).find('item').each(function () {
            let thumb = $(this).find('thumb').text();
            let title = $(this).find('title').text();
            let isbn = $(this).find('isbn').text();
            let im = new Image();
            im.src = thumb;

            elData = `<div class="grid-item" data-isbn="${isbn}">
                        <div>
                            <img src="${thumb}" alt="">
                        </div>
                        <p>${title}</p>
                    </div>`;

            $('.grid').append(elData);
            // $('.grid').html(elData);
        })

        setTimeout(function () {
            var elem = document.querySelector('.grid');
            var msnry = new Masonry(elem, {
                itemSelector: '.grid-item',
                gutter: 70
            });
        }, 1000)
    }

    let h = 0;

    function pup(num) {
        event.preventDefault();

        let isbn = $('.grid-item').eq(num).attr('data-isbn');

        $(data).find('item').each(function (k) {
            if ($(this).find('isbn').text() == isbn) {
                let title = $(this).find('title').text();
                let date = $(this).find('date').text();
                let thumb = $(this).find('thumb').text();
                let name = $(this).find('name').text();
                let detail = $(this).find('detail').html();

                h = k;

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

    $('.btn_prev').on('click', function () {

        if (h > 0) pup(--h);
        console.log(h)

    })
    $('.btn_next').on('click', function () {
        pup(++h);
    })

    function pupX() {
        $('.pup').css('display', 'none');
    }




    // masonry 플러그인


    // var elem = document.querySelector('.grid');
    // var msnry = new Masonry(elem, {
    //     itemSelector: '.grid-item',
    //     gutter: 70
    // });
}

window.addEventListener('load', init);
// xml에서 href, src url 과 같은 경로 값 불러오기