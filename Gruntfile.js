module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("package.json"),

    // Lint definitions
    jshint: {
      files: ["src/dmakLoader.js", "src/dmak.js", "src/jquery.dmak.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
  grunt.registerTask("travis", ["jshint"]);
};
