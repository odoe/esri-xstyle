module.exports = function (grunt) {
  'use strict';
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  // config
  var projectConfig = {
    app: 'app',
    dist: 'dist'
  };
  grunt.initConfig({
    project: projectConfig,
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
        paths: ['<%= project.app %>/css/less'],
        compress: true,
        cleancss: true
      },
      dev: {
        files: {
          '<%= project.app %>/css/main.css': [
            '<%= project.app %>/css/less/main.less',
            '<%= project.app %>/js/**/**/css/*.less'
          ]
        }
      }
    },
    watch: {
      styles: {
        files: [
          '<%= project.app %>/css/less/*.less',
          '<%= project.app %>/js/**/**/css/*.less',
          '<%= project.app %>/js/**/**/**/css/*.less'
        ],
        tasks: ['less:dev'],
        nospawn: true
      }
    }
  });

  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('default', ['less:prod']);
};
