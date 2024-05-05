
// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("karma-junit-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false,
      },
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      }
    },
    angularCli: {
      environment: "dev",
    },
    customLaunchers: {
      ChromeNoSandboxHeadless: {
        base: "ChromeHeadless",
        flags: [
          "--headless",
          // Without a remote debugging port, Google Chrome exits immediately.
          " --remote-debugging-port=9222",
        ],
      },
    },
    reporters: ["progress", "junit", "kjhtml"],
    port: 9876,
    singleRun: false,
  });
};

