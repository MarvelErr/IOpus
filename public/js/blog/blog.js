/**
 * Created by luwenxu on 2015/3/30.
 */
(function(){
    $(function(){
        $('body').data('SLAnimate',true);
        $('body').data('TitleAnimate',true);
        $('.cd-primary-nav a').click(function(){
            function animate(){
                $('.second-level a').css({'margin-right':100,'opacity':0});
                setTimeout(function(){
                    $('.second-level a').css({'margin-right':0,'opacity':1})
                },100);
            }
            var content=$(this).text();
            var HTMLArr=['HTML-HTML5','HTML-常用技巧'],JSArr=['JS-核心与进阶','JS-面向对象','JS-兼容实例'];
            var arr;
            if(content=='JavaScript'){
                arr=JSArr;
            }else{
                arr=HTMLArr
            }
            /*$.get('/blog/sl_c',{fl_c:content},function(data){
                console.log(data);
                $('.second-navigation ul').empty();
                for(var i= 0;i<data.results.length;i++)
                $('.second-navigation ul').append('<li>'+'<span>'+data.results[i].sl_c+'</span>'+'</li>')
            })*/
            if($('.second-level a').length==0){
                for(var i=0;i<arr.length;i++){
                    $('.second-level').append('<li><a href="">'+arr[i]+'</a></li>')
                }
                animate();
            }else{
                $('.second-level a').addClass('old').css({'margin-right':-200,'opacity':0});
                setTimeout(function(){
                    $('.second-level li').remove();
                    for(var i=0;i<arr.length;i++){
                        $('.second-level').append('<li><a href="">'+arr[i]+'</a></li>')
                    }
                    animate();
                },200);
            }

            //$('.second-level').empty();

            /*if($('body').data('SLAnimate')){
                setTimeout(function(){
                    $('.second-level a').css('margin-right',0)
                },0);
                $('body').data('SLAnimate',false)
            }*/
        });
        $('.cd-contact-info').on('click','span',function(){
            var content=$(this).text();
            $.get('/blog/vo',function(data){
                console.log(data)
            });
            /*$.get('/blog/title',{sl_c:content},function(data){
                $('main').empty().append(data);
                $('.cd-nav-trigger').trigger('click');
            })*/
        })
    })
})();