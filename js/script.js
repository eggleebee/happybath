$(function(){
    $('#gnb > li').each(function(idx , item){
        $(item).mouseenter(function(){
            $('#gnb > li').eq(idx).addClass('on')
        })
        $(item).mouseleave(function(){
            $('#gnb > li').eq(idx).removeClass('on')
        })
    })
    
    var isMgnb = false; 
    $('.btn-open').click(function(){
        if( isMgnb == false ){ 
            $('.m-menu-area').animate({'left':'0'},300) 
            isMgnb = true; 
        }
    }) 

    $('.btn-close').click(function(){
        console.log('cc')
        if( isMgnb == true ){ 
            $('.m-menu-area').animate({'left':'-100%'},300)
            isMgnb = false 
        }
    })
})