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
					livereload: 35730
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html2js');

	grunt.registerTask('server', [
		'connect:server',
		'watch'
    ]);

};