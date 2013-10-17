var exec = require('cordova/exec');

/**
 * The cordova statusBar object
 */
module.exports = {
  /**
   * Shows the status bar
   * @param successCallback  invoked with a FileSystem object
   * @param errorCallback  invoked if error occurs
   */
  show: function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "StatusBar", 'show',[null]);
  },
  hide: function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "StatusBar", 'hide',[null]);
  }
};

