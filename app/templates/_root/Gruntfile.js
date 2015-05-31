module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.config("bowercopy", {
        options: {
            srcPrefix: 'bower_components'
        },
        scripts: {
            options: {
                destPrefix: 'app/static/scripts/vendor'
            },
            files: {
                'angular/angular.js': 'angular/angular.js',
                'angular-bootstrap/ui-bootstrap-tpls.js': 'angular-bootstrap/ui-bootstrap-tpls.js'
            }
        },
        css: {
            options: {
                destPrefix: 'app/static/css/vendor'
            },
            files: {
                'bootstrap/bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.config("cssmin", {
        app: {
            files: {
                'app/static/css/main-min.css': ['app/static/css/main.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.config('concat', {
        options: {
            separator: ';'
         },
        scripts: {
            src: ['app/static/scripts/vendor/angular/angular.js',
                 'app/static/scripts/app.js',
                 'app/static/scripts/controllers.js',
                 'app/static/scripts/directives.js'],
            dest: 'app/static/scripts/temp/app.js'
       }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.config('uglify', {
        scripts: {
            files: {
                'app/static/scripts/app.min.js' : 'app/static/scripts/temp/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.config('karma', {
        unit: {
            configFile: './config/karma.conf.js',
            singleRun: true
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.config('protractor', {
        e2e: {
            options: {
                configFile: './config/protractor.conf.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-targethtml");
    grunt.config("targethtml", {
        "prod": {
            "files": {
                'app/templates/base.html': 'app/templates/base.html'
            }
        }
    });


    grunt.registerTask('default', function(){
       grunt.log.writeln('Welcome to the Flask Scaffold app, add targets in the build function');
    });

    grunt.registerTask('build', 'Builds the app', ['bowercopy']);

    grunt.registerTask('test', 'Runs the tests', ['karma']);

    grunt.registerTask('package', 'Task for packaging up app ready for deployment',
        ['karma', 'cssmin', 'concat', 'uglify', 'targethtml']);

};
