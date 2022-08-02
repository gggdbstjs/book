$('header').load('./inc.html header > div');
$('.search').load('./inc.html .search > div');
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

const SearchBtn = document.querySelector('.search_btn_header');
const Search = document.querySelector('.search');
const Close = document.querySelector('.close');
SearchBtn.addEventListener('click',function(){
    Search.classList.add('active');
});
Close.addEventListener('click',function(){
    Search.classList.remove('active');
});

var SearchValue ;
searchBtn.addEventListener('click',(function(){
    SearchValue = search.value;
    dataAjax();       
}));
    
function abc(success, data){
        console.log(success);        
        let str = '';
        let searchData = data.item.filter( (d)=>{
                str = d.author + d.title;
                if(str.match(SearchValue)) return d;
            }
        );
        console.log(searchData)
}
    
function dataAjax(){

    $.ajax({
            method: "get",
            dataType:"jsonp",
            jsonp:"abc",
            url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
            data: { 
                Query:"민음사",
                QueryType:"Publisher",
                TTBKey:"ttbgggdbstjs1055001",
                output:"JS",
                cover:"big",
                callback:"abc",
                Sort:"Accuracy",
                MaxResults: "100"
            }
        })
}