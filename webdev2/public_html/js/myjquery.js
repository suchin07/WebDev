$(document).ready(function(){
    $('#gallery-button').click(function(e){
        e.preventDefault();
        $('#gallery-extra').slideToggle(1500);
        $('#gallery-button').text('VIEW LESS');
    });
    //end of gallery-button
    $('#blog-button').click(function(e){
        e.preventDefault();
        $('#blog-extra').slideToggle(1500);
        $('#blog-button').text('VIEW LESS');
    });
    //end of blog-button
});
/*$(document).ready(function(){
    $('#gallery-button').click(function(e){
        e.preventDefault();
        $('#gallery-extra').slideDown(1500);
    });
    $('#gallery-button').click(function(e){
        e.preventDefault();
        $('#gallery-extra').slideUp(1500);
    });
    //end of #gallery-button
    
});*/