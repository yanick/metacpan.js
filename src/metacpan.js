;(function($){

    $.metacpan = function(options) {
        var self = $.extend({}, options);

        self.author = function(pause_id) {
            return $.ajax({
                url: 'http://api.metacpan.org/author/' + pause_id,
                dataType: 'json'
            });
        };

        self.module = function(module_name) {
            return $.ajax({
                url: 'http://api.metacpan.org/module/' + module_name,
                dataType: 'json'
            });
        };

        self.release = function(release_name) {
            return $.ajax({
                url: 'http://api.metacpan.org/release/' + release_name,
                dataType: 'json'
            });
        };

        return self;
    };
})(jQuery);
