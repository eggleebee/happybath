$(document).ready(function(){
    // slick 슬라이드
    $('.slides').slick({ 
        autoplay : true , 
        autoplaySpeed : 3000, 
        infinite : true,
        swipe : true,
        dots : true,
    });

    // 모바일 메뉴
    let btnOpen =$('.btn-open'),
        mMenu = $('.m-menu'),
        btnClose = $('.btn-close');
    
    //btnOpen.click(function(){})
    btnOpen.on('click', function(){
        mMenu.animate({left : '0'},600, 'easeInOutCubic')
    })

    btnClose.on('click', function(){
        mMenu.animate({left : '-100%'},600 , 'easeInOutCubic')
    })

})