$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings : ["Freelancer", "Full Stack Web Developer", "Web Designer", "Graphic Designer" ],
        typeSpeed: 100,
        backSpeed:60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings : ["Freelancer", "Full Stack Web Developer", "Web Designer", "Graphic Designer" ],
        typeSpeed: 100,
        backSpeed:60,
        loop: true
    })

    // Slide UP script

    $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0})
    // toggle menu script
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    })
});

// validation function with javascript
// $(function()
// {
//     function after_form_submitted(data)
//     {
//         if(data.result == 'success')
//         {
//             $('form#reused_form').hide();
//             $('#success_message').show();
//             $('#error_message').hide();
//         }
//         else
//         {
//             $('#error_message').append('<ul></ul>');

//             jQuery.each(data.errors,function(key,val)
//             {
//                 $('#error_message ul').append('<li>'+key+':'+val+'</li>');
//             });
//             $('#success_message').hide();
//             $('#error_message').show();

//             //reverse the response on the button
//             $('button[type="button"]', $form).each(function()
//             {
//                 $btn = $(this);
//                 label = $btn.prop('orig_label');
//                 if(label)
//                 {
//                     $btn.prop('type','submit' );
//                     $btn.text(label);
//                     $btn.prop('orig_label','');
//                 }
//             });

//         }//else
//     }

// 	$('#reused_form').submit(function(e)
//       {
//         e.preventDefault();

//         $form = $(this);
//         //show some response on the button
//         $('button[type="submit"]', $form).each(function()
//         {
//             $btn = $(this);
//             $btn.prop('type','button' );
//             $btn.prop('orig_label',$btn.text());
//             $btn.text('Sending ...');
//         });


//                     $.ajax({
//                 type: "POST",
//                 url: 'contact-me.php',
//                 data: $form.serialize(),
//                 success: after_form_submitted,
//                 dataType: 'json'
//             });

//       });
// });
