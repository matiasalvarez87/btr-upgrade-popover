
module.exports = function (grunt) {

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({
        
        cssmin: {
            minify: {
                expand: true,
                cwd: 'src/partials/',
                src: ['*.css'],
                dest: 'dist/partials/',
                ext: '.min.css'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/partials/template.html': 'src/partials/template.html',
                    'dist/partials/title.html': 'src/partials/title.html',
                    'dist/partials/content-duration.html': 'src/partials/content-duration.html',
                    'dist/partials/content-import.html': 'src/partials/content-import.html',
                    'dist/partials/content-primetime.html': 'src/partials/content-primetime.html'
                }
            }
        },

        'string-replace': {
            styles: {
                options: {
                    replacements: [
                        {
                            pattern: '<style type="text/css"></style>',
                            replacement: '<style type="text/css"><%= grunt.file.read(\'dist/partials/styles.min.css\') %></style>'
                        }
                    ]
                },
                files: {
                    'dist/partials/template.html': 'dist/partials/template.html'
                }
            },

            js: {
                options: {
                    replacements: [{
                            pattern: '<!--TEMPLATE-->',
                            replacement: '<%= grunt.file.read(\'dist/partials/template.html\') %>'
                        }, {
                            pattern: '<!--TITLE-->',
                            replacement: '<%= grunt.file.read(\'dist/partials/title.html\') %>'
                        }, {
                            pattern: '<!--CONTENT_DURATION-->',
                            replacement: '<%= grunt.file.read(\'dist/partials/content-duration.html\') %>'
                        }, {
                            pattern: '<!--CONTENT_IMPORT-->',
                            replacement: '<%= grunt.file.read(\'dist/partials/content-import.html\') %>'
                        }, {
                            pattern: '<!--CONTENT_PRIMETIME-->',
                            replacement: '<%= grunt.file.read(\'dist/partials/content-primetime.html\') %>'
                        }
                    ]
                },
                files: {
                    'dist/btr-upgrade-popover.js': 'src/btr-upgrade-popover.js'
                }
            }
        },

        uglify: {
            js: {
              files: {
                'dist/btr-upgrade-popover.min.js': 'dist/btr-upgrade-popover.js'
              }
            }
        }

    });

    grunt.registerTask('compile', ['cssmin', 'htmlmin', 'string-replace', 'uglify']);

    // Default task(s).
    grunt.registerTask('default', ['compile']);

};