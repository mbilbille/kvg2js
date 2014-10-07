module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("package.json"),

    // Lint definitions
    jshint: {
      files: ["bin/*"],
      options: {
        jshintrc: ".jshintrc"
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
  grunt.registerTask("travis", ["jshint"]);
};
