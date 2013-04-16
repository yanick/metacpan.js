;(function($){

    $.metacpan = function(options) {
        var self = $.extend({}, options);

        self.author = function(pause_id) {
            return $.ajax({
                url: 'http://api.metacpan.org/v0/author/' + pause_id,
                dataType: 'json'
            });
        };

        self.module = function(module_name) {
            return $.ajax({
                url: 'http://api.metacpan.org/v0/module/' + module_name,
                dataType: 'json'
            });
        };

        self.release = function(release_name) {
            return $.ajax({
                url: 'http://api.metacpan.org/v0/release/' + release_name,
                dataType: 'json'
            });
        };

        self.file = function( author, release, path ) {
            return $.ajax({
            url: 'http://api.metacpan.org/v0/file/' 
                    + author + '/' + release + '/' + path,
            dataType: 'json'
        });
}

        return self;
    };
})(jQuery);
