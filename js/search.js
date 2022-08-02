
const ResultBtn = document.getElementById("resultBtn");
const Result = document.getElementById("result");
var ResultValue ;
ResultBtn.addEventListener('click', function(){
    ResultValue = Result.value;
    dataAjax();
});

function abc(success, data){
    let str = '';
    let ResultData = data.item.filter( (d)=>{
            str = d.author + d.title;
            if(str.match("ResultValue")) return d;
        }
    );
    console.log(ResultData);   
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