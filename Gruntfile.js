module.exports = function (grunt) {
  grunt.initConfig({
    csslint: {
      options: {
        csslint: './csslintrc'
      },
      src: ['*.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['csslint']);
};
