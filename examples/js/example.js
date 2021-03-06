
(function ($) {
var data = {};

var panel = '<div class="example-panel">\
<ul>\
<li><a href="#" class="bg" data-bg="#000000">Black BG</a></li>\
<li><a href="#" class="bg" data-bg="#FFFFFF">White BG</a></li>\
<li><a href="#" class="bg" data-bg="#EFEFEF">Grey BG</a></li>\
<li></li>\
<li><a href="#" class="destroy">Destroy widget</a></li>\
</ul>\
</div>';

    $(document).ready (function () {
        $('body').append(Curator.render(panel, data));

        var pId = '.example-panel';

        $(pId+' a.bg').click(function(){
            $('body').css('background-color',$(this).data('bg'))
        });

        $(pId+' a.destroy').click(function(){
            widget.destroy();
        });
    });
})(window.Zepto || window.jQuery);




