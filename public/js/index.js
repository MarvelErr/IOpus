/**
 * Created by luwenxull on 2015/3/26.
 */
$(function(){
        $('[data-toggle="tooltip"]').tooltip();
    $('.fa-thumbs-o-up').click(function(){
        /*$.ajax({
            url:'/thumbs'
        }).done(function(data){console.log(data)})*/
        console.log(parseInt($('.up').text()+1));
    })
});