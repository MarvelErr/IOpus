/**
 * Created by luwenxu on 2015/3/30.
 */
(function(){
    $(function(){
        $('.primary-ul li').click(function(){
            var content=$(this).text();
            $.get('/blog/sl_c',{fl_c:content},function(data){
                console.log(data);
                $('.second-navigation ul').empty();
                for(var i= 0;i<data.results.length;i++)
                $('.second-navigation ul').append('<li>'+'<span>'+data.results[i].sl_c+'</span>'+'</li>')
            })
        });
        $('.second-ul').on('click','li',function(){
            var content=$(this).text();
            $.get('blogContent',{sl_c:content},function(data){
                console.log(data);
                /*$('.second-navigation ul').empty();
                for(var i= 0;i<data.results.length;i++)
                    $('.second-navigation ul').append('<li>'+'<span>'+data.results[i].sl_c+'</span>'+'</li>')*/
            })
        })
    })
})();