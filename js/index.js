/*
[  author ] ;- Muhammed alaraby
[  Date   ] ;- 19/10/19
[  Info   ] ;- Main script file
*/

//Get the current year for the copyright
$(document).ready(function(){
     $('#year').text(new Date().getFullYear());
  });

  // Init scroll spy
$('body').scrollspy({target:'#main-nav'});

// Smooth scrolling
$('#main-nav a').on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop:$(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
   