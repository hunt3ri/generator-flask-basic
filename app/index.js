
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
      console.log('test it1');
      done();
  },


    writing: {
        app: function () {
            console.log('hello');
            this.mkdir('app');
            this.copy('_static', 'app/static');
        }
    }




});