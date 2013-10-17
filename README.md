cordova-plugin-status-bar
=========================

This is a cordova / phonegap plugin which allows you to show or hide the status bar.

### Settings:
To be able to show and hide the status bar programmatically in iOS 7 you must set `UIViewControllerBasedStatusBarAppearance` to `NO` in your apps plist file.

### Example:
Hiding the status bar on one page.

```javascript
// Before entering page:
cordova.statusBar.hide();

// After leaving page:
cordova.statusBar.show();
```

### OS Support

#### iOS

Tested on iOS 6 and 7 on the iPhone. If you test on any other devices please create a pull request to update this readme with your findings or submit an issue.

### Other platforms

Other platforms may be supported in the future.
