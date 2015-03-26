/**
 * Created by luwenxull on 2015/3/26.
 */
$(function(){
    $('.fa-thumbs-o-up').click(function(){
        $.ajax({
            url:'/thumbs'
        }).done(function(data){console.log(data)})
    })
});