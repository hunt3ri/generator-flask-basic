module.exports = function(grunt) {


    grunt.loadNpmTasks("grunt-contrib-cssmin")
    grunt.config("cssmin", {
        app: {
            files: {
                'app/static/css/main-min.css': ['app/static/css/main.css']
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

    grunt.registerTask('build', ['cssmin', 'targethtml']);

};
