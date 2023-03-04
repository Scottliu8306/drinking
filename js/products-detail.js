

// Swap Image------------------------------

const $commodity = $('#Commodity')
// console .log($commodity)
const $commodityItems = $commodity.find('.commodity-thumbnail .commodity-img')
// console.log($commodityItems)
const $commodityFeature = $commodity.find('.commodity-feature .commodity-img')
console.log($commodityFeature)

$commodityItems.click(function(){
    const index = $(this).index();
    // console.log(index)
    $commodityFeature.attr("src","./images/commodity"+(index+1)+".jpg");
});

// Tab----------------------------------

const $tab = $("#Tab");
const $tabItems = $tab.find(".tab-li");
const $tabContents = $tab.find(".tab-content");
const tabIndex = 0;

$tabItems.eq(tabIndex).addClass("tab-li-active");

$tabItems.click(function(){
    const index = $(this).index();
    // console.log(index)

    $(this).addClass("tab-li-active")
    .siblings().removeClass("tab-li-active");

    $tabContents.eq(index).css("display","block").siblings().css("display","none");

});
