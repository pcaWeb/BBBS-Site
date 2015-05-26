module.exports = function(grunt) {
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/* *
		 * Compass Task
		 */
		 compass: {
		 	dev: {
		 		options: {
		 			config: 'config.rb',
		 			require: 'susy'
		 		}//options
		 	}//dev
		 },//compass

		/* *
		 * Sass Task
		 */
		sass: {
			dev: {
				options: {
					style: 'expanded',
					// sourcemap: 'none',
				}, //options
				files: {
					'compiled/style-human.css':'sass/style.scss'
				} //files
			}, //dev
			dist: {
				options: {
					style: 'compressed',
					// sourcemap: 'none',
				}, //options
				files: {
					'compiled/style.css':'sass/style.scss'
				} //files
			}, //dist
		}, //Sass

		/* *
		 * Autoprefixer Task
		 */
		autoprefixer: {
			options: {
				browsers: ['last 2 versions'],
			}, //options
			//prefix all files
			multiple_files: {
				expand: true,
				flatten: true,
				src: 'compiled/*.css',
				dest: 'css'
			} //multiple_files
		}, //Autoprefixer

		/* *
		 * Watch Task
		 */
		watch: {
			options: {
				livereload: true
			}, //options

			css: {
				files: '**/*.scss',
				tasks: ['compass:dev', 'autoprefixer']
			}, //css
			html: {
				files: ['*.html']
			} //html for livereload
		} //watch


	}); //initConfig

	grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default', ['watch']);
} //exports