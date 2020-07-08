module.exports = {
  setupFiles: ["<rootDir>/spec/jestSetup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    ".+\\.(svg|png|jpg)$": "identity-obj-proxy"
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "bower_components"]
}