/**
 * Created by luwenxull on 2015/3/26.
 */
$(function () {
    $.get('/supCount',function(data){
        $('.up').text(data.count)
    });
    $('.modal-footer button').click(function(event){
        if($('#supName').val()){
            $.post('/leaveWords',{
                name:$('#supName').val(),
                comments:$('#supComments').val()
            },function(data){
                $('#myModal').modal('hide')
                if(data.status=='success'){
                    $('.up').text(data.count)
                }
            })
        }
    })
});