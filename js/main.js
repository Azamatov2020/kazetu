    $('.card').on('click', function() {
    let currTab = $(this).parent().index();
    
    $('.card').removeClass('card-active');
    $(this).addClass('card-active');
    
    
    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active')
    })   


    $('.hamburger').on('click', function() { 
        $('.head__menu').toggle();
    })

    $('.menu-close') .on(' click', function(){
        $('.head__menu').hide();
    })
    
    let scene = document.getElementById('scene'); 
    let parallaxlnstance = new Parallax(scene);
    
    const swiper = new Swiper('.swiper-container',{
        direction : 'horizontal',
        spaceBetween : 50 ,
        slidesPerView : 3,
        loop : true ,
        stopOnLastlide : false ,
        autoplay :{
            delay :1000
        }
    });
    

     ymaps.ready (init);
     function init(){
         let myMap = new ymaps.Map ("map",{
             center: [55.76 , 37.64],
            zoom : 7,
        controls :['zoomControll','geolocationControl']
            });
     }
        

        $.validator.addMethod('regex', function(value, element, regexp){
             let regExsp = new RegExp(regexp); 
             return regExsp.test(value);
              }, 'Please check your input');
     
        $('form').validate({
                 rules : {
                    firstName : {
                    required: true,
                    regex : "[A-Za-z]{l,32}"
                    },
                
                phoneNumber : {
                     digits : true, 
                     required : true, 
                     minlength: 10, 
                     maxlength: 11, 
                     regex : "[0-9]+"
                }
            },
                 messages : {
                firstName : 'Введите имя правильно', 
                phoneNumber: 'Введите ваш номер'
                }
            })
            
                          



               

