$(document).ready(function(){
    $('#gallery-button').click(function(e){
        e.preventDefault();
        if ($('#gallery-extra').is(':hidden')) {
            $('#gallery-extra').slideDown(1500);
            $('#gallery-button').text('VIEW LESS');
        } else if ($('#gallery-extra').is(':visible')) {
            $('#gallery-extra').slideUp(1500);
            $('#gallery-button').text('VIEW MORE');
        }
    });
    $('#blog-button').click(function(e){
        e.preventDefault();
        if ($('#blog-extra').is(':hidden')) {
            $('#blog-extra').slideDown(1500);
            $('#blog-button').text('VIEW LESS');
        } else if ($('#blog-extra').is(':visible')) {
            $('#blog-extra').slideUp(1500);
            $('#blog-button').text('VIEW MORE');
        }
    });
});