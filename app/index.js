
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
      var done = this.async();

      // Have Yeoman greet the user.
      this.log(yosay(
          'Welcome to the ' + chalk.red('Python Flask Basics') + ' generator!'
      ));

      var prompts = [{
      type: 'input',
      name: 'appName',
      message: "What's the name of your app: ",
      default: function() {return 'Flask-Basic'}
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));

  },

    writing: {
        app: function () {
            console.log('Scaffolding Flask Basic app in directory : ' + this.appName)
            this.mkdir(this.appName);
            var appDir = this.appName + "/app";
            this.mkdir(appDir);
            this.bulkDirectory('_static', appDir + '/static', null);
            this.bulkDirectory('_templates', appDir + '/templates', null);
            this.bulkDirectory('_web', appDir + '/web', null)
            this.copy('__init__.py', appDir + '/__init__.py', null);
            this.copy('_root/manage.py', this.appName + '/manage.py', null);
            this.copy('_root/.gitignore', this.appName + '/.gitignore', null);
            this.copy('_root/requirements.txt', this.appName + '/requirements.txt', null);
            this.copy('_root/gruntfile.js', this.appName + '/gruntfile.js', null);

            this.fs.copyTpl(
                this.templatePath('_root/package.json'),
                this.destinationPath(this.appName + '/package.json'),
                {name: this.appName}
            );
            this.fs.copyTpl(
                this.templatePath('_root/bower.json'),
                this.destinationPath(this.appName + '/bower.json'),
                {name: this.appName}
            );


        }
    },

  install: function () {
      console.log("Hello");
      this.spawnCommand('pyvenv', [this.appName + '/venv']);
      /*this.spawnCommand('source', ['./' + this.appName + '/venv/bin/activate']);*/
  }


});