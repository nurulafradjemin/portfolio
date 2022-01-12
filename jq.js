//index file start
$(document).ready(function(){

    $(".show").click(function(){
        $(".slide_toggle").slideDown(500);
    });
    $(".slide_toggle").click(function(){
        $(this).fadeOut(500);
    });


    $(".hide_box").click(function(){
        $(".box").hide(200);
    });
    $(".show_box").click(function(){
    $(".box").show(200);
    });
    // $(".hide_box").dblclick(function(){
    //     $(".box").hide(200);
    // });

    // $(".hide_box").mouseenter(function(){
    //     $(".box").hide(200);
    // });
    // $(".hide_box").mouseleave(function(){
    //     $(".box").hide(1000);
    // });
    $(".toggle_box").click(function(){
        $(".box").toggle();
    });
    $(".fade_in_box").click(function(){
        $(".box").fadeIn();
    });
    $(".fade_out_box").mouseenter(function(){
        $(".box").fadeOut();
    });
    $(".fade_toggle_box").click(function(){
        $(".box").fadeToggle();
    });
    $('.fade_to_box').click(function(){
        $('.box').fadeTo(1000, .5);
    });

    // $('.main_menu').click(function(){
    //     $('.drop_menu').slideDown();
    // });
    // $(".main_menu").click(function(){
    //     $('.drop_menu').slideUp();
    // });
    $(".main_menu").click(function(){
        $('.drop_menu').slideToggle();
    });
    $(".drop_menu").click(function(){
        $(this).slideUp();
    });

    // $('.animate').click(function(){
    //     $(".box").animate({
    //         left: '250px',
    //         opacity: '.7',
    //         height: '300px',
    //         width: "300px"
    //     });
    // });

    $('.animate').click(function(){
        var box = $(".box");
        box.animate({
            height:'500px',
            opacity: '.7'
        },800)
        box.animate({
            width:'500px',
            opacity: '.5'
        },800)
        box.animate({
            height:'250px',
            opacity: '.7'
        },800)
        box.animate({
            width:'250px',
            opacity: '1'
        },800)
    })

});