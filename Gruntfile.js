module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			build: {
		    	files: {
		      		'js/dist/js-cookie-manager.min.js': ['js/src/js-cookie-manager.js'],
		     		 'js/dist/lang-cookie-listener.min.js': ['js/src/lang-cookie-listener.js'],
		  		}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};