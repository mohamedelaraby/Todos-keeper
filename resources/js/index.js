 //Jquery start here
 $(document).ready(function () {
    //  // Hide h1
    // //  $('h2').hide();
    // //  $('h2#heading1').hide();
    // //  $('h2.heading1').hide();
    
    // // Change the paragarph color
    // //$('p span').css('color','#ff0000');
    
    // //Grap the first list item
    // $('ul.list-group li:nth-child(odd)').css('background','#555');
    // $('ul#list li:first').css('background','#ff0000');
    // $('ul.list-group li:last').css('background','#00ff00');
    // $('ul#list li:nth-child(4)').css('background','#0000ff');
    // $('ul#list li:nth-child(8)').css('background','	#9ccc9c');
    // $('ul.list-group li:nth-child(2n)').css('background','#f4f4f4');

    // //inputs
    // //Hide the button type
    // $(':button').hide();

    // //Hide the submit input type
    // $(':submit').hide();

    // // Hide the text input type
    // $(':text').hide();

    // // Show all the input type content
    // $(':submit').show();
    // $(':text').show();
    // $(':button').show();

    // //Links
    //  // Change the Color
    //  $('[href]').css('background','#f5b375');
     
    //  // Specific link color
    // $('a[href="https://yahoo.com"]').css('color','#d90838');
    // $('a[href="https://google.com"]').css('background','#c598a7');
    
    // // Hide everything
    // $('*').hide();
    // // Show every thing
    // $('*').show();
});


////////////////////////////[ Mouse Events  ]//////////

$(document).ready(function(){

    // [ Click ] 
    // $('#btn1').click(function(){
    //     $('div#container').css('color',"#333");
    // });

    // //hide button 2
    // $('#btn1').on('click', function(){
    //     $('#btn2').hide();
    // })

    // Hide the pragraph content
    // $('#btn1').on('click', function(){
    //     $('p.lead').hide();
    // });

    // //Show the paragaph content
    // $('#btn2').on('click', function(){
    //     $('p.lead').show();
    // });

    // [ Double click: - dbclick ]
    // $('#btn1').dblclick(function(){
    //     $('p.lead').toggle();
    // });
    // $('#btn2').dblclick(function(){
    //     $('.display-5').toggle();
    // });

        // [ Hover : - hover ]
    // $('#btn1').hover(function(){
    //     $('.lead').toggle();
    // });
    
    // [ Hover : - hover ]
    // $('#btn1').on('mousemove',function(){
    //     $('.btn').css('background','#f4f4f4');
    // });

    // [ mouse up : - mouseup ]
    // $('#btn1').on('mousedown', function(){
    //     $('.lead').css('font-size','4rem');
    // });
    // // [ mouse down : - mousedown ]
    // $('#btn1').on('mouseup', function(){
    //     $('.lead').css('font-size','2rem');
    // });

    // $('#btn1').on('dblclick',function(event){
    //     // console.log(event.currentTarget.innerHTML);
    //     // console.log(event.currentTarget.innerText);
    //     // console.log(event.currentTarget.id);
    //     // console.log(event.currentTarget.outerHTML);
    //     // console.log(event.currentTarget.className);

    // });
    

    // Get the mouse position in inner html
    // $(document).on('mousemove',function(e){
    //      console.log('Coords: Y:' + e.clientY + 'X: ' + e.clientX);
    // });

    // $(document).on('mousemove',function(e){
    //     $('.lead').html('Coords: Y: ' + e.clientY + " X: "
    //     + e.clientX);
    // })


    // [ Inputs ]
    // $('input').focus(function(){
    //     //$('.lead').css('color','#333');
    //     // Change the focus mode
    //     // $('input#name').css('background','#CDC0B0');
    //     // $('input#email').css('background','#524c46');
    //     // $('input#gender').css('background','#cdc0b0');
    //     $(this).css('background','#cdc0b0');
    // });

    // Hnadle the Focus mode
    // $('input').blur(function (){
    //     $(this).css('background','#f4f4f4');
    // }); 
    
    // $('input').blur(function (){
    //     $(this).css('background','#ccc');
    // });


    // Key up and Key down
    // $('input').keyup(function (e){
    //     // change the font size
    //     $(this).css('color','#333');
    //     // Get what we type out
    //     $('.lead').html(e.target.value);
    // });
     

    // Change event
    // $('select#gender').change(function (e){
    //     $('.lead').html(e.target.value);
    // });

    // Submit
    // $('#form').submit(function(e){
    //     e.preventDefault();
    //     //  Get the value of input
    //     let name = $('input#name').val();

    //     // Get the email address
    //     let email = $('input#email').val();

    //     $('.lead').html('name : ' + name + ' '  + 'Email: ' + email);


    // });

});

////////////////////////////[ DOM Manipulation ]//////////

$(document).ready(function(){
    // // Change the background of teh first text
    // $('p.par1').css({
    //     color:'#f4f4f4',
    //     background:'#ccc'
    // })

    // // Change the font size -f button
    // $('#btn1').css({
    //     color:'#f4f4f4',
    //     background:'#555'
    // });

   // $('p.par1').addClass('paragraph');
     
    // [ Change html elements content ]
    // $('#btn1').on('click', function(){
    //     $('p.par1').text('djfkghskdjfhgsdjfmcxbhgkdfhgere');
    // });

    // append html elemnt  - Add element to the end 
    // $('#list').append('<li class="list-group-item">Appned list item</li>');
    // $('ul#list').append('<li class="list-group-item">Appned list item</li>');

    // // Prepend - Add element to the top
    // $('#list').prepend('<li class="list-group-item">Prepend at top list item</li>')


    // append to && prepend to
    // $('p.par2').prependTo('p.par1');
    // $('.par1').appendTo('.par2');

    // [Before && After ]
    // $('ul').before('<h3 class="display-4 bg-success d-inline-block">BEFORE</h3>');
    // $('p.par1').before('<h3 class="display-4 bg-success d-inline-block">BEFORE</h3>');
    
    // $('p.par2').after('<h3 class="display-4 bg-success d-inline-block">AFTER</h3>');
    // $('p.par1').after('<h3 class="display-4 bg-success d-inline-block">AFTER</h3>');


    // EMPTY && DETACH
    // $('ul').empty();
    // $('p.par1').empty();

    // $('ul').detach();
    // $('p.par2').detach();

    // ATTRIBUTES
    // $('a').attr('target', '_blank');

    //  // get the attributes
    //  $('p.par1').html($('a').attr('href'));
    //  $('.par2').text($('a').attr('href'));

        // Remove the attributes
    //$('a').removeAttr('target');

    // Wrap elements
    //$('p.par1').wrap('<h2 class="display-4">');
    //$('p').wrapAll('<h3 class="display-3">');

        // // add item to the ul from readin the input value
        // $('#addItem').on('keyup', function(e){
        //     // Get the code of the input
        //     // let code = e.which;
        //     // if(code == 13){
        //     //     e.preventDefault();
        //     //     $('#list').append('<li class="list-group-item">'+e.target.value+'</li>');
        //     // }

        //     // arrays

        //     // let names = [
        //     //     'brad', 'helllen', 'bradesg'
        //     // ];

        //     // $.each(names, function(i, val){
        //     //     //$('p.test').text(val);
        //     //     $('ul#list').append('<li class="list-group-item">' +val+'</li>');
        //     // });

        //     // Convert list items into array 
        //     let newItem = $('ul#list').toArray();
        //     $.each(newItem, function(i , val){
        //         console.log(val.Class);
        //     })

        // });

});


////////////////////////////[ DOM Manipulation ]//////////
$(document).ready(function () {
    // // Fade out
    // $('#btnFadeOut').click(function(){
    //     $('#box').fadeOut(3000, function(){
    //         $('#btnFadeOut').text('It`s gone');
    //     });
    // });

    // // Fade in
    // $('#btnFadeIn').on('click',function(){
    //     $('#box').fadeIn(3000, function(){
    //         $('#btnFadeIn').text('it`s in now');
    //     });
    // });

    // // Fade Toggle
    // $('#btnFadeTog').on('click',function(){
    //     $('#box').fadeToggle(2000,function () {
    //         $('#btnFadeTog').text('it`s Toggle');
    //     });
    // });
    
    
    
    // Slide animation

    // Slide up
    // $('#btnSlideUp').on('click',function(){
    //     $('#box').slideUp(2000,function () {
    //         $('#btnSlideUp').text('it`s slide up');
    //     });
    // });
    
    // // Slide Down
    // $('#btnSlideDown').on('click',function(){
    //     $('#box').slideDown(2000,function () {
    //         $('#btnSlideDown').text('it`s slide down');
    //     });
    // });
     
    // // Slide Toggle
    // $('#btnSlideTog').on('click',function(){
    //     $('#box').slideToggle(2000,function () {
    //         $('#btnSlideTog').text('it`s Toggle');
    //     });
    // });

    // // Stop slide animation
    // $('#btnSlideStop').click(function(){
    //     $('#box').stop();
    // });

    //  $('#moveRight').click(function(){
    //     $('#box').animate({
    //         width:'500px',
    //         hieght:'500px'
    //     });
    //  });

});


//////////////////////////////// [ Ajax ]

$(document).ready(function () {
    $('#result').load('ajax.html');
}); 