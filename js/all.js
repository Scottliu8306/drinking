

const $header = $("#Header");
const $headerBtn = $header.find(".header-btn");
const $headerBody = $header.find(".header-body");
// 測試
// console.log($header)
let isShow = false;


$headerBtn.click(function(){
    $headerBody.toggle();

    // 讓後面的Body不要滑動，且header-body收起來可以恢復
    isShow = !isShow
    if(isShow === true){
        $("body").css("overflow" , "hidden");
    }else{
        $("body").css("overflow" , "visible")
    } 
});

$headerBody.click(function(){
    $(this).hide();
    isShow = false;
    $("body").css("overflow","visible")
});