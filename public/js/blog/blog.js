/**
 * Created by luwenxu on 2015/3/30.
 */
(function () {
    $(function () {
        function animate() {
            $('.second-level a').css({'margin-right': 100, 'opacity': 0});
            setTimeout(function () {
                $('.second-level a').css({'margin-right': 0, 'opacity': 1})
            }, 100);
        }

        function titleAnimate() {
            $('.blog-title a').css({'margin-right': 100, 'opacity': 0});
            setTimeout(function () {
                $('.blog-title a').css({'margin-right': 0, 'opacity': 1})
            }, 100);
        }

        $('.cd-primary-nav a').click(function () {
            $('.title-box').empty();
            var content = $(this).text();
            $.get('/blog/sl_c', {fl_c: content}, function (data) {
                //console.log(data)
                var results = data.results;
                if ($('.second-level a').length == 0) {
                    for (var i = 0; i < results.length; i++) {
                        $('.second-level').append('<li><a>' + results[i].sl_c + '</a></li>')
                    }
                    animate();
                } else {
                    $('.second-level a').addClass('old').css({'margin-right': -200, 'opacity': 0});
                    setTimeout(function () {
                        $('.second-level li').remove();
                        for (var i = 0; i < results.length; i++) {
                            $('.second-level').append('<li><a>' + results[i].sl_c + '</a></li>')
                        }
                        animate();
                    }, 200);
                }
            });
        });
        $('.second-level').on('click', 'li', function () {
            var content = $(this).text();
            $.get('/blog/title', {sl_c: content}, function (data) {
                var results = data.results;
                //console.log(results);
                if ($('.blog-title').length == 0) {
                    for (var i = 0; i < results[0].content.length; i++) {
                        $('.title-box').append('<span class="blog-title"><a data-src='+results[0].content[i].href+'>' + results[0].content[i].title + '</a></span>')
                    }
                    titleAnimate();
                } else {
                    $('.blog-title a').addClass('old').css({'margin-right': -200, 'opacity': 0});
                    setTimeout(function () {
                        $('.blog-title').remove();
                        for (var i = 0; i < results[0].content.length; i++) {
                            $('.title-box').append('<span class="blog-title"><a data-src='+results[0].content[i].href+'>' + results[0].content[i].title + '</a></span>')
                        }
                        titleAnimate();
                    }, 200);
                }
            })
        })
        $('.title-box').on('click','a',function(){
            $.get('/blog/content',{src:$(this).data('src')},function(data){
                //console.log(data)
                $('main').empty().append(data).css('padding','3% 10%');
                $('.cd-nav-trigger').trigger('click');
            })
        })
    })
})();