/**
 * Created by luwenxu on 2015/3/30.
 */
(function(){
    $(function(){
        $('.primary-ul li').click(function(){
            var content=$(this).text();
            $.get('secondNavOfBlog',{firstNav:content},function(data){
                console.log(data);
                $('.second-navigation ul').empty();
                for(var i= 0;i<data.results.length;i++)
                $('.second-navigation ul').append('<li>'+'<span>'+data.results[i].secondNav+'</span>'+'</li>')
            })
        })
    })
})();