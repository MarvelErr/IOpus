/**
 * Created by luwenxull on 2015/3/26.
 */
$(function () {
    $.ajax({
        url: '/homepageCount',
        type: 'PUT',
        success: function(response) {
            //...
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('.fa-thumbs-o-up').click(function () {
        /*$.ajax({
         url:'/thumbs'
         }).done(function(data){console.log(data)})*/
        //console.log();
        var count=parseInt($('.up').text());
        count++;
        $('.up').text(count);
        swal("Good job!", "Thanks for your support!", "success");
    });
});