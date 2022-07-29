$('header').load('./inc.html header > div');

$('footer').load('./inc.html footer > div');

const SearchBtn = document.querySelector('.search_btn_header'),
Search = document.querySelector('.search'),
Close = document.querySelector('.close');
SearchBtn.addEventListener('click',function(){
Search.classList.add('active');});
Close.addEventListener('click',function(){
Search.classList.remove('active');});


var SearchValue ;
    SearchBtn.addEventListener('click', function(){
        SearchValue = search.value;
        dataAjax();        
    });

function abc(success, data){
    // console.log(success);        
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
