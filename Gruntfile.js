module.exports = function(grunt) {
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/* *
		 * Sass Task
		 */
		sass: {
			dev: {
				options: {
					style: 'expanded',
					// sourcemap: 'none',
				},
				files: {
					'css/style-human.css':'sass/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					// sourcemap: 'none',
				},
				files: {
					'css/style.css':'sass/style.scss'
				}
			},
		},

		/* *
		 * Watch Task
		 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		} 


	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}