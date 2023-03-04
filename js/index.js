

const $banner = $("#Banner");
const $bannerLs = $banner.find(".banner-ul");
const $bannerBtns = $banner.find(".banner-btn");
const duration = 2000;
// 宣告變數
let bannerInterval;
let index=0;

// 檢查
// console. log($bannerLs)


function setSlide(){
    if(index < 3){
        index += 1;
    }else{
        index = 0;
    }
    // console.log(index)
    $bannerLs.css("left", -index*100+"%")
    // $bannerLs.css("left", `-$( index * 100 ) % `)

    $bannerBtns.eq(index).addClass("banner-btn-active").siblings().removeClass("banner-btn-active")


};

// Init-------------------------------------
$bannerBtns.eq(index).addClass("banner-btn-active")
bannerInterval = setInterval(setSlide,duration)

$bannerLs.css("left", -index*100 + "%");


// Event--------------------------------------

$banner.hover(function(){
    clearInterval(bannerInterval)
},function(){
    bannerInterval = setInterval(setSlide,duration)
});

$bannerBtns.click(function(){
    index = $(this).index();
    $bannerLs.css("left", -index * 100 + "%");
    $(this)
    .addClass("banner-btn-active")
    .siblings().removeClass("banner-btn-active");
});