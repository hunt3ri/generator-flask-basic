module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.initConfig({
        "bower-install-simple": {
        options: {
            color: true,
            directory: "bower_components"
        },
        "prod": {
            options: {
                production: true
            }
        },
        "dev": {
            options: {
                production: false
            }
        }
    }

    });


    grunt.registerTask('default', function(){
       grunt.log.writeln('Welcome to the Flask Scaffold app, add targets in the build function');
    });

    grunt.registerTask('build', ['bower-install-simple']);

};
