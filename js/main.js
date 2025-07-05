


$('a[href^="#"]').click(function(){
    let ahref=$(this).attr('href');
    let offset=$(ahref).offset().top;
    $("li a").removeClass('active');
    $(this).addClass('active');
    $('body,html').animate({scrollTop:offset},10);
})