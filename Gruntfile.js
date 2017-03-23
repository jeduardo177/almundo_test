/**
 * Created by Jose on 18/03/2017.
 */

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        //uglify
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            js: {
                files: [{
                    cwd: 'config',
                    expand: true,
                    src: '*.js',
                    dest: 'config/min/'
                }]
            }
        },
        watch: {
            scripts: {

                files: ['/app/*.js'],
                expand: true,
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // loadNpmTasks
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    // Run Default task(s).
    grunt.registerTask('default', ['watch']);
};