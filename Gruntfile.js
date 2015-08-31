module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
	        livereload: {
	            options: {
	                livereload: '<%= connect.server.options.livereload %>'
	            },
	            files: [
					'partials/**/*.html',
		            'js/**/*.js',
		            'index.html'
	            ]
	        }
	    },
		connect: {
			server: {
				options: {
					port: 1237,
					livereload: 35731,
                    middleware: function (connect, options) {
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        var modRewrite = require('connect-modrewrite');
                        return [
                            // Include the proxy to the dev backend
                            proxy,
                            // rewrite for AngularJS HTML5 mode, redirect all non-file urls to index.html
                            modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.jpg|\\.gif|\\.json\\swf$ /index.html [L]']),
                            // Serve static files.
                            connect.static(options.base[0])
                        ];
                    }
				},
                proxies: [{
                    context: '/data',
                    host: 'localhost',
                    port: '8080',
                    rewrite: {
                        '^/data': '/'
                    }
                }]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('server', [
        'configureProxies:server',
		'connect:server',
		'watch'
    ]);

};
