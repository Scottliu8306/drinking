

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
    console.log(index)
};

bannerInterval = setInterval(setSlide,duration)

$bannerLs.css("left", -index*100 + "%");