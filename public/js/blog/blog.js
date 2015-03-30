/**
 * Created by luwenxu on 2015/3/30.
 */
(function(){
    $(function(){
        $('.primary-ul li').click(function(){
            var content=$(this).text();
            $.get('secondNavOfBlog',{firstNav:content},function(data){
                console.log(data);
            })
        })
    })
})();